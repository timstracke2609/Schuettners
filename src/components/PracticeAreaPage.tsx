import PageHero from '@/components/PageHero'
import ContactBlock from '@/components/ContactBlock'
import Link from 'next/link'

interface PracticeAreaPageProps {
  title: string
  subtitle?: string
  content: React.ReactNode
  relatedAreas?: { title: string; href: string }[]
}

export default function PracticeAreaPage({
  title,
  subtitle,
  content,
  relatedAreas = [],
}: PracticeAreaPageProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumb={[
          { label: 'Rechtsgebiete', href: '/sample-page/' },
          { label: title, href: '#' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-content">
                {content}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="card">
                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-4">
                    Beratungsgespräch vereinbaren
                  </h3>
                  <p className="text-primary-600 text-sm mb-4">
                    Für eine persönliche Beratung stehen wir Ihnen gerne zur Verfügung.
                  </p>
                  <Link href="/kontakt/" className="btn-primary w-full text-center">
                    Kontakt aufnehmen
                  </Link>
                </div>

                {/* Related Areas */}
                {relatedAreas.length > 0 && (
                  <div className="card">
                    <h3 className="font-serif text-lg font-semibold text-primary-900 mb-4">
                      Weitere Rechtsgebiete
                    </h3>
                    <ul className="space-y-2">
                      {relatedAreas.map((area) => (
                        <li key={area.href}>
                          <Link
                            href={area.href}
                            className="text-primary-600 hover:text-primary-900 transition-colors flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {area.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Office Info */}
                <div className="card bg-primary-50 border-primary-100">
                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-4">
                    Kontakt
                  </h3>
                  <address className="not-italic text-primary-600 text-sm space-y-2">
                    <p>Schüttners Hug & Partner mbB</p>
                    <p>Kaiserstraße 21-23<br />44135 Dortmund</p>
                    <p>
                      <a href="tel:+4923158969940" className="hover:text-primary-900">
                        (0231) 58 96 94 0
                      </a>
                    </p>
                    <p>
                      <a href="mailto:kanzlei@schuettners.de" className="hover:text-primary-900">
                        kanzlei@schuettners.de
                      </a>
                    </p>
                  </address>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  )
}
