import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white no-print">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-xl font-bold mb-6">Kontakt</h2>
            <address className="not-italic space-y-3 text-primary-100">
              <p className="font-medium text-white">Schüttners Hug & Partner mbB</p>
              <p>Rechtsanwälte und Notare</p>
              <p>Kaiserstraße 21-23</p>
              <p>44135 Dortmund</p>
            </address>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="font-serif text-xl font-bold mb-6">Erreichbarkeit</h2>
            <div className="space-y-3 text-primary-100">
              <p>
                <span className="block text-sm text-primary-300">Telefon</span>
                <a
                  href="tel:+4923158969940"
                  className="hover:text-white transition-colors"
                >
                  (0231) 58 96 94 0
                </a>
              </p>
              <p>
                <span className="block text-sm text-primary-300">Fax</span>
                (0231) 58 96 94 20
              </p>
              <p>
                <span className="block text-sm text-primary-300">E-Mail</span>
                <a
                  href="mailto:kanzlei@schuettners.de"
                  className="hover:text-white transition-colors"
                >
                  kanzlei@schuettners.de
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="font-serif text-xl font-bold mb-6">Öffnungszeiten</h2>
            <div className="space-y-3 text-primary-100">
              <p>Mo-Fr: 8:30 Uhr – 18:00 Uhr</p>
              <p>sowie nach Vereinbarung</p>
              <p className="text-sm text-primary-300 mt-4">
                Gegenüber dem Landgericht Dortmund
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-serif text-xl font-bold mb-6">Rechtliches</h2>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/impressum/"
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz/"
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt/"
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/formulare/"
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    Formulare
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-12 pt-8">
          <p className="text-center text-primary-300 text-sm">
            © {new Date().getFullYear()} Schüttners Hug & Partner mbB. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
