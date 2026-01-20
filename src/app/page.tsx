import Link from 'next/link'
import PracticeAreaCard from '@/components/PracticeAreaCard'
import AttorneyCard from '@/components/AttorneyCard'
import ContactBlock from '@/components/ContactBlock'

const practiceAreas = [
  {
    title: 'Wirtschaftsrecht',
    description: 'Interdisziplinäre ganzheitliche Beratung im nationalen und internationalen Wirtschaftsrecht für kleine und mittelständische Unternehmen.',
    href: '/1216-2/',
  },
  {
    title: 'Notariat',
    description: 'Notare als von der Rechtsordnung geforderte Spezialisten. Schnelle und zuverlässige notarielle Dienstleistungen.',
    href: '/notariat/',
  },
  {
    title: 'Immobilienrecht',
    description: 'Umfassende Beratung im Immobilienrecht, von notariellen Urkunden über Architektenverträge bis zum WEG-Recht.',
    href: '/immobilienrecht/',
  },
  {
    title: 'Arbeitsrecht',
    description: 'Arbeitsrechtliche Regelungen von erheblicher wirtschaftlicher Bedeutung für Arbeitgeber und Arbeitnehmer.',
    href: '/arbeitsrecht/',
  },
  {
    title: 'Sanierungs- und Insolvenzrecht',
    description: 'Beratung von Insolvenzverwaltern, krisenbetroffenen Unternehmen und Gläubigern aus langjähriger Erfahrung.',
    href: '/sanierungs-und-insolvenzrecht/',
  },
  {
    title: 'Familienrecht',
    description: 'Beratung in Fragen zu Unterhalt, Sorgerecht, Trennung und Scheidung.',
    href: '/familienrecht/',
  },
]

const featuredAttorneys = [
  {
    name: 'Prof. Joachim Schüttners',
    title: 'Rechtsanwalt',
    specializations: ['Fachanwalt für Bank- und Kapitalmarktrecht'],
    href: '/prof-joachim-schuettners/',
  },
  {
    name: 'Hans-Peter Hug',
    title: 'Rechtsanwalt und Notar',
    specializations: ['Fachanwalt für Handels- und Gesellschaftsrecht', 'Fachanwalt für Erbrecht'],
    href: '/hans-peter-hug/',
  },
  {
    name: 'Nicole Schüttners',
    title: 'Rechtsanwältin',
    specializations: ['Fachanwältin für Arbeitsrecht'],
    href: '/nicole-schuettners/',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-5"></div>
        <div className="container-wide py-24 md:py-32 lg:py-40 relative">
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Bewährte Kompetenz für Ihr Recht
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Als Rechts- und forensische Berater sind wir vorwiegend für klein- und mittelständische Betriebe und bundesweit operierende Unternehmen tätig.
            </p>
            <p className="text-lg text-primary-200 mb-10">
              Schwerpunkte unserer Tätigkeit liegen in den Bereichen des Gesellschaftsrechts, Bank- und Kapitalmarktrechts, Arbeitsrechts sowie des Immobilienrechts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt/" className="btn-primary bg-white text-primary-900 hover:bg-primary-50">
                Kontakt aufnehmen
              </Link>
              <Link href="/sample-page/" className="btn-primary bg-white text-primary-900 hover:bg-primary-50">
                Unsere Rechtsgebiete
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-600 font-medium mb-4 block">Über unsere Kanzlei</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Schüttners Hug & Partner mbB
              </h2>
              <p className="text-primary-700 text-lg leading-relaxed mb-6">
                Als Rechts- und forensische Berater sind wir vorwiegend für klein- und mittelständische Betriebe und bundesweit operierende Unternehmen tätig.
              </p>
              <p className="text-primary-600 leading-relaxed mb-8">
                Schwerpunkte unserer Tätigkeit liegen in den Bereichen des Gesellschaftsrechts, Bank- und Kapitalmarktrechts, Arbeitsrechts sowie des Immobilienrechts.
              </p>
              <Link href="/rechtsanwaelte/" className="btn-secondary">
                Unser Team kennenlernen
              </Link>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-900 mb-1">Standort</h3>
                    <p className="text-primary-600">
                      Kaiserstraße 21-23<br />
                      44135 Dortmund<br />
                      <span className="text-sm">Gegenüber dem Landgericht Dortmund</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-900 mb-1">Öffnungszeiten</h3>
                    <p className="text-primary-600">
                      Mo-Fr: 8:30 Uhr – 18:00 Uhr<br />
                      sowie nach Vereinbarung
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-900 mb-1">Kontakt</h3>
                    <p className="text-primary-600">
                      Tel: (0231) 58 96 94 0<br />
                      Fax: (0231) 58 96 94 20<br />
                      kanzlei@schuettners.de
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium mb-4 block">Unsere Expertise</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Rechtsgebiete
            </h2>
            <p className="text-primary-600 text-lg max-w-2xl mx-auto">
              Umfassende rechtliche Beratung in allen relevanten Bereichen des Wirtschafts- und Privatrechts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.href} {...area} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/sample-page/" className="btn-secondary">
              Alle Rechtsgebiete anzeigen
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Attorneys */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium mb-4 block">Unser Team</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Rechtsanwälte & Notare
            </h2>
            <p className="text-primary-600 text-lg max-w-2xl mx-auto">
              Erfahrene Spezialisten für Ihre rechtlichen Anliegen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAttorneys.map((attorney) => (
              <AttorneyCard key={attorney.href} {...attorney} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/rechtsanwaelte/" className="btn-secondary">
              Alle Rechtsanwälte anzeigen
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <ContactBlock />
    </>
  )
}
