import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.schuettners.de'

  const routes = [
    // Core pages
    '/',
    '/sample-page/',
    '/kontakt/',
    '/formulare/',
    '/impressum/',
    '/datenschutz/',

    // Practice areas
    '/arbeitsrecht/',
    '/bank-und-kapitalmarktrecht/',
    '/erbrecht/',
    '/familienrecht/',
    '/forderungseinzug-inkassoservice/',
    '/immobilienrecht/',
    '/notariat/',
    '/sanierungs-und-insolvenzrecht/',
    '/verkehrsrecht/',
    '/1216-2/',

    // Directory pages
    '/rechtsanwaelte/',
    '/notare/',

    // Attorney profiles
    '/achim-fleig/',
    '/fabian-doyscher/',
    '/hans-peter-hug/',
    '/philipp-sebastian-hug/',
    '/stephan-kuwert/',
    '/prof-joachim-schuettners/',
    '/nicole-schuettners/',
    '/gerhard-soekeland/',
    '/claudia-wollbrecht-schulte/',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.includes('rechtsanwaelte') || route.includes('sample-page') ? 0.8 : 0.6,
  }))
}
