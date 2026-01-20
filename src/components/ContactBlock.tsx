interface ContactBlockProps {
  className?: string
}

export default function ContactBlock({ className = '' }: ContactBlockProps) {
  return (
    <section className={`bg-primary-50 ${className}`}>
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Kontaktieren Sie uns
            </h2>
            <p className="text-primary-700 text-lg mb-8">
              Wir freuen uns auf Ihre Nachricht. Vereinbaren Sie einen Termin für ein persönliches Gespräch.
            </p>
            <a href="/kontakt/" className="btn-primary">
              Zum Kontaktformular
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <address className="not-italic space-y-4">
              <div>
                <h3 className="font-medium text-primary-900 mb-1">Adresse</h3>
                <p className="text-primary-600">
                  Schüttners Hug & Partner mbB<br />
                  Kaiserstraße 21-23<br />
                  44135 Dortmund
                </p>
              </div>

              <div>
                <h3 className="font-medium text-primary-900 mb-1">Telefon</h3>
                <a
                  href="tel:+4923158969940"
                  className="text-primary-600 hover:text-primary-900 transition-colors"
                >
                  (0231) 58 96 94 0
                </a>
              </div>

              <div>
                <h3 className="font-medium text-primary-900 mb-1">E-Mail</h3>
                <a
                  href="mailto:kanzlei@schuettners.de"
                  className="text-primary-600 hover:text-primary-900 transition-colors"
                >
                  kanzlei@schuettners.de
                </a>
              </div>

              <div>
                <h3 className="font-medium text-primary-900 mb-1">Öffnungszeiten</h3>
                <p className="text-primary-600">
                  Mo-Fr: 8:30 Uhr – 18:00 Uhr<br />
                  sowie nach Vereinbarung
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
