import { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie Schüttners Hug & Partner mbB in Dortmund. Rechtsanwälte und Notare. Telefon: (0231) 58 96 94 0',
}

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Nachricht."
        breadcrumb={[{ label: 'Kontakt', href: '/kontakt/' }]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-8">
                Kontaktdaten
              </h2>

              <address className="not-italic space-y-8">
                <div>
                  <h3 className="font-medium text-primary-900 mb-2">Anschrift</h3>
                  <p className="text-primary-600">
                    Schüttners Hug & Partner mbB<br />
                    Rechtsanwälte und Notare<br />
                    Kaiserstraße 21-23<br />
                    44135 Dortmund
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary-900 mb-2">Telefon & Fax</h3>
                  <p className="text-primary-600">
                    Telefon: <a href="tel:+4923158969940" className="hover:text-primary-900 transition-colors">(0231) 58 96 94 0</a><br />
                    Fax: (0231) 58 96 94 20
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary-900 mb-2">E-Mail</h3>
                  <p className="text-primary-600">
                    <a href="mailto:kanzlei@schuettners.de" className="hover:text-primary-900 transition-colors">
                      kanzlei@schuettners.de
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary-900 mb-2">Öffnungszeiten</h3>
                  <p className="text-primary-600">
                    Mo-Fr: 8:30 Uhr – 18:00 Uhr<br />
                    sowie nach Vereinbarung
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-primary-900 mb-2">Lage</h3>
                  <p className="text-primary-600">
                    Gegenüber dem Landgericht Dortmund<br />
                    Ca. 15 Minuten vom Hauptbahnhof
                  </p>
                </div>
              </address>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-8">
                Nachricht senden
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vorname" className="block text-sm font-medium text-primary-900 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="vorname"
                      name="vorname"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="nachname" className="block text-sm font-medium text-primary-900 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="nachname"
                      name="nachname"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-primary-900 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="betreff" className="block text-sm font-medium text-primary-900 mb-2">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    id="betreff"
                    name="betreff"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="nachricht" className="block text-sm font-medium text-primary-900 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-y"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="datenschutz"
                    name="datenschutz"
                    required
                    className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="datenschutz" className="text-sm text-primary-600">
                    Ich habe die <a href="/datenschutz/" className="underline hover:text-primary-900">Datenschutzerklärung</a> gelesen und akzeptiere diese. *
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Nachricht absenden
                </button>

                <p className="text-sm text-primary-500">
                  * Pflichtfelder
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
