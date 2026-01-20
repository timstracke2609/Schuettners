import PageHero from '@/components/PageHero'
import ContactBlock from '@/components/ContactBlock'
import Link from 'next/link'

interface AttorneyProfilePageProps {
  name: string
  title: string
  email: string
  specializations?: string[]
  content: React.ReactNode
  imageUrl?: string
}

export default function AttorneyProfilePage({
  name,
  title,
  email,
  specializations = [],
  content,
  imageUrl,
}: AttorneyProfilePageProps) {
  return (
    <>
      <PageHero
        title={name}
        subtitle={title}
        breadcrumb={[
          { label: 'Rechtsanwälte', href: '/rechtsanwaelte/' },
          { label: name, href: '#' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Specializations */}
              {specializations.length > 0 && (
                <div className="mb-8">
                  <h2 className="font-serif text-xl font-semibold text-primary-900 mb-4">
                    Qualifikationen
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {specializations.map((spec) => (
                      <span
                        key={spec}
                        className="inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-700 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="prose-content">
                {content}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Profile Card */}
                <div className="card">
                  {imageUrl ? (
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-primary-100 mb-4">
                      <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-square rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                      <svg
                        className="w-24 h-24 text-primary-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}

                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-1">
                    {name}
                  </h3>
                  <p className="text-primary-600 text-sm mb-4">{title}</p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="block text-primary-500 text-xs uppercase tracking-wide mb-1">
                        E-Mail
                      </span>
                      <a
                        href={`mailto:${email}`}
                        className="text-primary-700 hover:text-primary-900 transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                    <div>
                      <span className="block text-primary-500 text-xs uppercase tracking-wide mb-1">
                        Telefon
                      </span>
                      <a
                        href="tel:+4923158969940"
                        className="text-primary-700 hover:text-primary-900 transition-colors"
                      >
                        (0231) 58 96 94 0
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="card bg-primary-50 border-primary-100">
                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-3">
                    Beratungsgespräch vereinbaren
                  </h3>
                  <p className="text-primary-600 text-sm mb-4">
                    Für eine persönliche Beratung stehen wir Ihnen gerne zur Verfügung.
                  </p>
                  <Link href="/kontakt/" className="btn-primary w-full text-center">
                    Kontakt aufnehmen
                  </Link>
                </div>

                {/* Back to team */}
                <Link
                  href="/rechtsanwaelte/"
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Zurück zur Teamübersicht
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  )
}
