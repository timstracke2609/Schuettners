/**
 * Content Verification Script for Schüttners Law Firm Website
 *
 * This script performs basic checks to ensure no content drift has occurred
 * between the source website and the modernized implementation.
 *
 * Usage: npm run verify
 */

import * as fs from 'fs';
import * as path from 'path';

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const MANIFEST_PATH = path.join(CONTENT_DIR, 'manifest.json');

interface ManifestEntry {
  route: string;
  slug: string;
  title: string;
  sourceUrl: string;
  group: string;
}

interface Manifest {
  generatedAt: string;
  baseUrl: string;
  routes: ManifestEntry[];
}

// Key content strings that MUST appear in the modernized site
// These are extracted from the original website content
const CRITICAL_CONTENT = {
  contact: {
    address: 'Kaiserstraße 21-23',
    zip: '44135',
    city: 'Dortmund',
    phone: '(0231) 58 96 94 0',
    fax: '(0231) 58 96 94 20',
    email: 'kanzlei@schuettners.de',
    hours: 'Mo-Fr: 8:30',
  },
  firm: {
    name: 'Schüttners Hug & Partner mbB',
    subtitle: 'Rechtsanwälte und Notare',
    tagline: 'Bewährte Kompetenz für Ihr Recht',
  },
  attorneys: [
    'Prof. Joachim Schüttners',
    'Hans-Peter Hug',
    'Nicole Schüttners',
    'Claudia Wollbrecht-Schulte',
    'Stephan Kuwert',
    'Achim Fleig',
    'Gerhard Sökeland',
    'Fabian Doyscher',
    'Philipp Sebastian Hug',
  ],
  practiceAreas: [
    'Arbeitsrecht',
    'Bank- und Kapitalmarktrecht',
    'Erbrecht',
    'Familienrecht',
    'Forderungseinzug',
    'Immobilienrecht',
    'Notariat',
    'Sanierungs- und Insolvenzrecht',
    'Verkehrsrecht',
    'Wirtschaftsrecht',
  ],
  legal: {
    vatId: 'DE177113344',
    registryNumber: 'PR 3232',
    court: 'Essen',
  },
};

function checkFileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

function readFileContent(filePath: string): string {
  if (!checkFileExists(filePath)) {
    return '';
  }
  return fs.readFileSync(filePath, 'utf-8');
}

function verifyManifest(): { passed: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!checkFileExists(MANIFEST_PATH)) {
    errors.push('Manifest file not found at ' + MANIFEST_PATH);
    return { passed: false, errors };
  }

  try {
    const manifest: Manifest = JSON.parse(readFileContent(MANIFEST_PATH));

    // Check required fields
    if (!manifest.generatedAt) errors.push('Manifest missing generatedAt field');
    if (!manifest.baseUrl) errors.push('Manifest missing baseUrl field');
    if (!manifest.routes || !Array.isArray(manifest.routes)) {
      errors.push('Manifest missing routes array');
      return { passed: false, errors };
    }

    // Check minimum number of routes
    if (manifest.routes.length < 20) {
      errors.push(`Expected at least 20 routes, found ${manifest.routes.length}`);
    }

    // Check required routes exist
    const requiredRoutes = [
      '/',
      '/sample-page/',
      '/kontakt/',
      '/formulare/',
      '/impressum/',
      '/datenschutz/',
      '/rechtsanwaelte/',
      '/notare/',
    ];

    for (const route of requiredRoutes) {
      const found = manifest.routes.find((r) => r.route === route);
      if (!found) {
        errors.push(`Missing required route: ${route}`);
      }
    }

    console.log(`✓ Manifest contains ${manifest.routes.length} routes`);
    console.log(`✓ Generated at: ${manifest.generatedAt}`);

  } catch (e) {
    errors.push(`Failed to parse manifest: ${e}`);
  }

  return { passed: errors.length === 0, errors };
}

function verifyAppStructure(): { passed: boolean; errors: string[] } {
  const errors: string[] = [];
  const srcDir = path.join(__dirname, '..', 'src', 'app');

  const requiredPages = [
    'page.tsx',
    'layout.tsx',
    'globals.css',
    'sitemap.ts',
    'rechtsanwaelte/page.tsx',
    'notare/page.tsx',
    'kontakt/page.tsx',
    'formulare/page.tsx',
    'impressum/page.tsx',
    'datenschutz/page.tsx',
    'sample-page/page.tsx',
    'arbeitsrecht/page.tsx',
    'erbrecht/page.tsx',
    'familienrecht/page.tsx',
    '1216-2/page.tsx',
  ];

  for (const page of requiredPages) {
    const pagePath = path.join(srcDir, page);
    if (!checkFileExists(pagePath)) {
      errors.push(`Missing page file: ${page}`);
    } else {
      console.log(`✓ Found: ${page}`);
    }
  }

  return { passed: errors.length === 0, errors };
}

function verifyComponentStructure(): { passed: boolean; errors: string[] } {
  const errors: string[] = [];
  const componentsDir = path.join(__dirname, '..', 'src', 'components');

  const requiredComponents = [
    'Header.tsx',
    'Footer.tsx',
    'PageHero.tsx',
    'ContactBlock.tsx',
    'PracticeAreaCard.tsx',
    'AttorneyCard.tsx',
    'AttorneyProfilePage.tsx',
    'PracticeAreaPage.tsx',
  ];

  for (const component of requiredComponents) {
    const componentPath = path.join(componentsDir, component);
    if (!checkFileExists(componentPath)) {
      errors.push(`Missing component: ${component}`);
    } else {
      console.log(`✓ Component: ${component}`);
    }
  }

  return { passed: errors.length === 0, errors };
}

function verifyContentPresence(): { passed: boolean; errors: string[] } {
  const errors: string[] = [];
  const srcDir = path.join(__dirname, '..', 'src');

  // Read all TypeScript/TSX files in src
  const allContent = getAllTsxContent(srcDir);

  // Check critical content strings
  console.log('\nVerifying critical content strings...');

  // Contact info
  for (const [key, value] of Object.entries(CRITICAL_CONTENT.contact)) {
    if (!allContent.includes(value)) {
      errors.push(`Missing contact info: ${key} (${value})`);
    } else {
      console.log(`✓ Contact: ${key}`);
    }
  }

  // Firm info
  for (const [key, value] of Object.entries(CRITICAL_CONTENT.firm)) {
    if (!allContent.includes(value)) {
      errors.push(`Missing firm info: ${key} (${value})`);
    } else {
      console.log(`✓ Firm: ${key}`);
    }
  }

  // Attorneys
  for (const attorney of CRITICAL_CONTENT.attorneys) {
    if (!allContent.includes(attorney)) {
      errors.push(`Missing attorney: ${attorney}`);
    } else {
      console.log(`✓ Attorney: ${attorney}`);
    }
  }

  // Practice areas
  for (const area of CRITICAL_CONTENT.practiceAreas) {
    if (!allContent.includes(area)) {
      errors.push(`Missing practice area: ${area}`);
    } else {
      console.log(`✓ Practice area: ${area}`);
    }
  }

  return { passed: errors.length === 0, errors };
}

function getAllTsxContent(dir: string): string {
  let content = '';

  if (!fs.existsSync(dir)) return content;

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      content += getAllTsxContent(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      content += readFileContent(filePath);
    }
  }

  return content;
}

async function main() {
  console.log('='.repeat(60));
  console.log('Schüttners Website Content Verification');
  console.log('='.repeat(60));
  console.log('');

  const results: { name: string; passed: boolean; errors: string[] }[] = [];

  // Run verification checks
  console.log('1. Verifying manifest...');
  results.push({ name: 'Manifest', ...verifyManifest() });
  console.log('');

  console.log('2. Verifying app structure...');
  results.push({ name: 'App Structure', ...verifyAppStructure() });
  console.log('');

  console.log('3. Verifying components...');
  results.push({ name: 'Components', ...verifyComponentStructure() });
  console.log('');

  console.log('4. Verifying content presence...');
  results.push({ name: 'Content', ...verifyContentPresence() });
  console.log('');

  // Summary
  console.log('='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));

  let allPassed = true;

  for (const result of results) {
    const status = result.passed ? '✓ PASSED' : '✗ FAILED';
    console.log(`${status}: ${result.name}`);

    if (!result.passed) {
      allPassed = false;
      for (const error of result.errors) {
        console.log(`  - ${error}`);
      }
    }
  }

  console.log('');
  if (allPassed) {
    console.log('All verification checks passed!');
    process.exit(0);
  } else {
    console.log('Some verification checks failed. Please review the errors above.');
    process.exit(1);
  }
}

main().catch(console.error);
