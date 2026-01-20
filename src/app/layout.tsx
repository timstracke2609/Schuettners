import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Schüttners Hug & Partner mbB | Rechtsanwälte und Notare in Dortmund',
    template: '%s | Schüttners Hug & Partner mbB',
  },
  description: 'Bewährte Kompetenz für Ihr Recht. Rechtsanwälte und Notare in Dortmund. Wirtschaftsrecht, Bank- und Kapitalmarktrecht, Arbeitsrecht, Immobilienrecht.',
  keywords: ['Rechtsanwalt', 'Notar', 'Dortmund', 'Wirtschaftsrecht', 'Arbeitsrecht', 'Familienrecht', 'Erbrecht'],
  authors: [{ name: 'Schüttners Hug & Partner mbB' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Schüttners Hug & Partner mbB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <a href="#main-content" className="skip-to-content">
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
