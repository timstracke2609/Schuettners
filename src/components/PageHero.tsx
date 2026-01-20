interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href: string }[]
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16 md:py-24">
      <div className="container-wide">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-primary-200">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Startseite
                </a>
              </li>
              {breadcrumb.map((item, index) => (
                <li key={item.href} className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {index === breadcrumb.length - 1 ? (
                    <span className="text-white">{item.label}</span>
                  ) : (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
