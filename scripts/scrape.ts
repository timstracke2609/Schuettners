/**
 * Content Scraper for Schüttners Law Firm Website
 *
 * This script fetches HTML content from the original website and extracts
 * the main content verbatim for use in the modernized Next.js site.
 *
 * Usage: npm run scrape
 */

import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const BASE_URL = 'https://www.schuettners.de';

// All routes to scrape as specified in requirements
const ROUTES: RouteConfig[] = [
  // Core pages
  { path: '/', slug: 'home', title: 'Kanzlei', group: 'core' },
  { path: '/sample-page/', slug: 'sample-page', title: 'Rechtsgebiete', group: 'core' },
  { path: '/kontakt/', slug: 'kontakt', title: 'Kontakt', group: 'core' },
  { path: '/formulare/', slug: 'formulare', title: 'Formulare', group: 'core' },
  { path: '/impressum/', slug: 'impressum', title: 'Impressum', group: 'legal' },
  { path: '/datenschutz/', slug: 'datenschutz', title: 'Datenschutz', group: 'legal' },

  // Practice areas (Rechtsgebiete)
  { path: '/arbeitsrecht/', slug: 'arbeitsrecht', title: 'Arbeitsrecht', group: 'practice-areas' },
  { path: '/bank-und-kapitalmarktrecht/', slug: 'bank-und-kapitalmarktrecht', title: 'Bank- und Kapitalmarktrecht', group: 'practice-areas' },
  { path: '/erbrecht/', slug: 'erbrecht', title: 'Erbrecht', group: 'practice-areas' },
  { path: '/familienrecht/', slug: 'familienrecht', title: 'Familienrecht', group: 'practice-areas' },
  { path: '/forderungseinzug-inkassoservice/', slug: 'forderungseinzug-inkassoservice', title: 'Forderungseinzug / Inkassoservice', group: 'practice-areas' },
  { path: '/immobilienrecht/', slug: 'immobilienrecht', title: 'Immobilienrecht', group: 'practice-areas' },
  { path: '/notariat/', slug: 'notariat', title: 'Notariat', group: 'practice-areas' },
  { path: '/sanierungs-und-insolvenzrecht/', slug: 'sanierungs-und-insolvenzrecht', title: 'Sanierungs- und Insolvenzrecht', group: 'practice-areas' },
  { path: '/verkehrsrecht/', slug: 'verkehrsrecht', title: 'Verkehrsrecht', group: 'practice-areas' },
  { path: '/1216-2/', slug: '1216-2', title: 'Wirtschaftsrecht', group: 'practice-areas' },

  // Directory pages
  { path: '/rechtsanwaelte/', slug: 'rechtsanwaelte', title: 'Rechtsanwälte', group: 'directory' },
  { path: '/notare/', slug: 'notare', title: 'Notare', group: 'directory' },

  // Attorney profile pages
  { path: '/achim-fleig/', slug: 'achim-fleig', title: 'Achim Fleig', group: 'attorneys' },
  { path: '/fabian-doyscher/', slug: 'fabian-doyscher', title: 'Fabian Doyscher', group: 'attorneys' },
  { path: '/hans-peter-hug/', slug: 'hans-peter-hug', title: 'Hans-Peter Hug', group: 'attorneys' },
  { path: '/philipp-sebastian-hug/', slug: 'philipp-sebastian-hug', title: 'Philipp Sebastian Hug', group: 'attorneys' },
  { path: '/stephan-kuwert/', slug: 'stephan-kuwert', title: 'Stephan Kuwert', group: 'attorneys' },
  { path: '/prof-joachim-schuettners/', slug: 'prof-joachim-schuettners', title: 'Prof. Joachim Schüttners', group: 'attorneys' },
  { path: '/nicole-schuettners/', slug: 'nicole-schuettners', title: 'Nicole Schüttners', group: 'attorneys' },
  { path: '/gerhard-soekeland/', slug: 'gerhard-soekeland', title: 'Gerhard Soekeland', group: 'attorneys' },
  { path: '/claudia-wollbrecht-schulte/', slug: 'claudia-wollbrecht-schulte', title: 'Claudia Wollbrecht-Schulte', group: 'attorneys' },
];

interface RouteConfig {
  path: string;
  slug: string;
  title: string;
  group: 'core' | 'legal' | 'practice-areas' | 'directory' | 'attorneys';
}

interface ManifestEntry {
  route: string;
  slug: string;
  title: string;
  sourceUrl: string;
  contentFile: string;
  group: string;
  scrapedAt: string;
  images: string[];
  pdfs: string[];
}

interface Manifest {
  generatedAt: string;
  baseUrl: string;
  routes: ManifestEntry[];
  discoveredPages: string[];
  navigation: {
    main: Array<{
      label: string;
      path: string;
      children?: Array<{ label: string; path: string }>;
    }>;
  };
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    console.log(`Fetching: ${url}`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'de-DE,de;q=0.9,en;q=0.8',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`);
      return null;
    }

    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

function extractMainContent($: cheerio.CheerioAPI): {
  content: string;
  title: string;
  images: string[];
  pdfs: string[];
} {
  // Remove elements that are part of the site chrome
  $('header').remove();
  $('footer').remove();
  $('nav').remove();
  $('.cookie-banner').remove();
  $('.cookie-notice').remove();
  $('#cookie-notice').remove();
  $('script').remove();
  $('style').remove();
  $('noscript').remove();
  $('.sidebar').remove();
  $('#sidebar').remove();
  $('[class*="sidebar"]').remove();
  $('[class*="cookie"]').remove();
  $('[class*="popup"]').remove();
  $('[class*="modal"]').remove();

  // Try to find the main content area
  let mainContent = $('main').first();
  if (mainContent.length === 0) {
    mainContent = $('article').first();
  }
  if (mainContent.length === 0) {
    mainContent = $('#content').first();
  }
  if (mainContent.length === 0) {
    mainContent = $('.content').first();
  }
  if (mainContent.length === 0) {
    mainContent = $('[role="main"]').first();
  }
  if (mainContent.length === 0) {
    mainContent = $('.entry-content').first();
  }
  if (mainContent.length === 0) {
    mainContent = $('.page-content').first();
  }
  if (mainContent.length === 0) {
    // Fall back to body if no main content area found
    mainContent = $('body');
  }

  // Get the page title
  const title = $('title').text().trim() || $('h1').first().text().trim() || '';

  // Extract images
  const images: string[] = [];
  mainContent.find('img').each((_, el) => {
    const src = $(el).attr('src');
    if (src) {
      images.push(src.startsWith('http') ? src : `${BASE_URL}${src}`);
    }
  });

  // Extract PDF links
  const pdfs: string[] = [];
  mainContent.find('a[href$=".pdf"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      pdfs.push(href.startsWith('http') ? href : `${BASE_URL}${href}`);
    }
  });

  // Get the HTML content
  const content = mainContent.html() || '';

  return { content, title, images, pdfs };
}

function discoverInternalLinks($: cheerio.CheerioAPI): string[] {
  const links: string[] = [];

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      // Only include internal links
      if (href.startsWith('/') && !href.startsWith('//')) {
        links.push(href);
      } else if (href.startsWith(BASE_URL)) {
        links.push(href.replace(BASE_URL, ''));
      }
    }
  });

  // Deduplicate and filter
  return [...new Set(links)]
    .filter(link => {
      // Exclude common non-page paths
      return !link.includes('#') &&
             !link.match(/\.(jpg|jpeg|png|gif|svg|webp|pdf|doc|docx|xls|xlsx|css|js)$/i) &&
             !link.startsWith('/wp-') &&
             !link.startsWith('/feed');
    });
}

async function scrapeRoute(route: RouteConfig): Promise<ManifestEntry | null> {
  const url = `${BASE_URL}${route.path}`;
  const html = await fetchPage(url);

  if (!html) {
    return null;
  }

  const $ = cheerio.load(html);
  const { content, title, images, pdfs } = extractMainContent($);

  // Use extracted title if available, fall back to configured title
  const pageTitle = title.split('|')[0].trim() || title.split('–')[0].trim() || route.title;

  const contentFile = `${route.slug}.html`;
  const contentPath = path.join(__dirname, '..', 'content', contentFile);

  // Write content to file
  fs.writeFileSync(contentPath, content, 'utf-8');
  console.log(`  Saved: ${contentFile}`);

  return {
    route: route.path,
    slug: route.slug,
    title: pageTitle,
    sourceUrl: url,
    contentFile,
    group: route.group,
    scrapedAt: new Date().toISOString(),
    images,
    pdfs,
  };
}

async function main() {
  console.log('='.repeat(60));
  console.log('Schüttners Website Content Scraper');
  console.log('='.repeat(60));
  console.log(`\nBase URL: ${BASE_URL}`);
  console.log(`Routes to scrape: ${ROUTES.length}\n`);

  // Ensure content directory exists
  const contentDir = path.join(__dirname, '..', 'content');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  const manifestEntries: ManifestEntry[] = [];
  const discoveredPages: Set<string> = new Set();

  // Scrape all configured routes
  for (const route of ROUTES) {
    const entry = await scrapeRoute(route);
    if (entry) {
      manifestEntries.push(entry);
    }

    // Small delay to be polite to the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Discover additional internal links from homepage
  const homepageHtml = await fetchPage(BASE_URL);
  if (homepageHtml) {
    const $ = cheerio.load(homepageHtml);
    const links = discoverInternalLinks($);

    for (const link of links) {
      const knownPaths = ROUTES.map(r => r.path);
      if (!knownPaths.includes(link) && !knownPaths.includes(link + '/')) {
        discoveredPages.add(link);
      }
    }
  }

  // Create manifest
  const manifest: Manifest = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    routes: manifestEntries,
    discoveredPages: [...discoveredPages].sort(),
    navigation: {
      main: [
        { label: 'Kanzlei', path: '/' },
        {
          label: 'Rechtsanwälte',
          path: '/rechtsanwaelte/',
          children: manifestEntries
            .filter(e => e.group === 'attorneys')
            .map(e => ({ label: e.title, path: e.route })),
        },
        { label: 'Notare', path: '/notare/' },
        {
          label: 'Rechtsgebiete',
          path: '/sample-page/',
          children: manifestEntries
            .filter(e => e.group === 'practice-areas')
            .map(e => ({ label: e.title, path: e.route })),
        },
        { label: 'Formulare', path: '/formulare/' },
        { label: 'Kontakt', path: '/kontakt/' },
      ],
    },
  };

  // Write manifest
  const manifestPath = path.join(contentDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`\nManifest saved: ${manifestPath}`);

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  console.log(`Successfully scraped: ${manifestEntries.length} pages`);
  console.log(`Failed: ${ROUTES.length - manifestEntries.length} pages`);
  console.log(`Discovered additional pages: ${discoveredPages.size}`);

  if (discoveredPages.size > 0) {
    console.log('\nDiscovered pages (not in initial route list):');
    [...discoveredPages].slice(0, 10).forEach(p => console.log(`  - ${p}`));
    if (discoveredPages.size > 10) {
      console.log(`  ... and ${discoveredPages.size - 10} more (see manifest.json)`);
    }
  }

  // List all PDFs found
  const allPdfs = [...new Set(manifestEntries.flatMap(e => e.pdfs))];
  if (allPdfs.length > 0) {
    console.log('\nPDF files found:');
    allPdfs.forEach(p => console.log(`  - ${p}`));
  }

  console.log('\nDone!');
}

main().catch(console.error);
