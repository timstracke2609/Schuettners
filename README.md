# Schüttners Hug & Partner mbB - Modernized Website

A modern, responsive website for the German law firm Schüttners Hug & Partner mbB, built with Next.js 14, TypeScript, and Tailwind CSS.

## Important: Content Freeze Notice

**DO NOT edit content files manually unless the firm updates the canonical content on www.schuettners.de**

This website maintains content parity with the original website. All text, names, addresses, phone numbers, and legal information must match the source exactly.

## Project Overview

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (via next/font)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run scrape` | Re-scrape content from original site |
| `npm run verify` | Verify content integrity |

## Content Management

### How Content Scraping Works

The `/scripts/scrape.ts` script fetches and extracts content from the original website:

1. Fetches HTML from each configured URL
2. Extracts main content (excluding header, footer, navigation)
3. Saves extracted content to `/content/` directory
4. Generates a `manifest.json` with route mappings and metadata

### Re-running the Scraper

When the original site content changes:

```bash
npm run scrape
```

This will:
- Fetch fresh content from www.schuettners.de
- Update all content files in `/content/`
- Regenerate the manifest

### Content Verification

To verify no content drift has occurred:

```bash
npm run verify
```

This checks:
- All required pages exist
- Critical content strings are present (contact info, attorney names, etc.)
- Manifest is valid and complete

## Project Structure

```
├── content/                  # Extracted content from original site
│   └── manifest.json        # Route and content metadata
├── public/
│   ├── assets/              # Images
│   └── docs/                # PDF documents
├── scripts/
│   ├── scrape.ts            # Content scraping script
│   └── verify-content.ts    # Content verification script
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── layout.tsx       # Root layout
│   │   ├── globals.css      # Global styles
│   │   ├── sitemap.ts       # Dynamic sitemap
│   │   └── [route]/         # Individual pages
│   ├── components/          # React components
│   │   ├── Header.tsx       # Site header with navigation
│   │   ├── Footer.tsx       # Site footer
│   │   ├── PageHero.tsx     # Page header component
│   │   ├── ContactBlock.tsx # Contact information block
│   │   ├── PracticeAreaCard.tsx
│   │   ├── AttorneyCard.tsx
│   │   ├── PracticeAreaPage.tsx  # Template for practice areas
│   │   └── AttorneyProfilePage.tsx
│   └── lib/                 # Utility functions
└── package.json
```

## URL Structure

The site maintains the exact URL structure of the original:

### Core Pages
- `/` - Homepage (Kanzlei)
- `/sample-page/` - Rechtsgebiete overview
- `/kontakt/` - Contact page
- `/formulare/` - Downloadable forms
- `/impressum/` - Legal notice
- `/datenschutz/` - Privacy policy

### Practice Areas (Rechtsgebiete)
- `/arbeitsrecht/`
- `/bank-und-kapitalmarktrecht/`
- `/erbrecht/`
- `/familienrecht/`
- `/forderungseinzug-inkassoservice/`
- `/immobilienrecht/`
- `/notariat/`
- `/sanierungs-und-insolvenzrecht/`
- `/verkehrsrecht/`
- `/1216-2/` - Wirtschaftsrecht

### Directory Pages
- `/rechtsanwaelte/` - Attorney directory
- `/notare/` - Notary directory

### Attorney Profiles
- `/prof-joachim-schuettners/`
- `/hans-peter-hug/`
- `/nicole-schuettners/`
- `/claudia-wollbrecht-schulte/`
- `/stephan-kuwert/`
- `/achim-fleig/`
- `/gerhard-soekeland/`
- `/fabian-doyscher/`
- `/philipp-sebastian-hug/`

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Static Export

```bash
# Add to next.config.js: output: 'export'
npm run build
# Static files will be in /out directory
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Accessibility Features

- Skip to content link
- Semantic HTML structure
- ARIA labels for navigation
- Focus ring indicators
- Keyboard navigation support
- Responsive design for all screen sizes
- High contrast color scheme

## SEO

- Dynamic sitemap generation
- Meta titles and descriptions for all pages
- Open Graph tags
- Semantic HTML structure
- Clean URL structure preserved from original site

## Content Audit

### Pages from Original Site

All pages from the original site have been implemented:

| Route | Status | Notes |
|-------|--------|-------|
| `/` | ✅ Implemented | Homepage |
| `/sample-page/` | ✅ Implemented | Rechtsgebiete |
| `/kontakt/` | ✅ Implemented | Contact with form |
| `/formulare/` | ✅ Implemented | PDF links preserved |
| `/impressum/` | ✅ Implemented | Legal content verbatim |
| `/datenschutz/` | ✅ Implemented | Privacy policy verbatim |
| All practice areas | ✅ Implemented | 10 pages |
| All attorney profiles | ✅ Implemented | 9 pages |
| `/rechtsanwaelte/` | ✅ Implemented | Directory |
| `/notare/` | ✅ Implemented | Directory |

### PDF Documents

All PDF forms are linked from their original URLs on the source site. The links are preserved exactly as presented on the original `/formulare/` page.

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

Private - All rights reserved by Schüttners Hug & Partner mbB.

## Contact

Schüttners Hug & Partner mbB
Kaiserstraße 21-23
44135 Dortmund
Tel: (0231) 58 96 94 0
Email: kanzlei@schuettners.de
