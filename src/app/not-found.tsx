import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl font-bold text-primary-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-primary-700 mb-6">
          Seite nicht gefunden
        </h2>
        <p className="text-primary-600 mb-8 max-w-md mx-auto">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Zur Startseite
          </Link>
          <Link href="/kontakt/" className="btn-secondary">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  )
}
