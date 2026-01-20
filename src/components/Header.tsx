'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { label: 'Kanzlei', path: '/' },
  {
    label: 'Rechtsanwälte',
    path: '/rechtsanwaelte/',
    children: [
      { label: 'Prof. Joachim Schüttners', path: '/prof-joachim-schuettners/' },
      { label: 'Hans-Peter Hug', path: '/hans-peter-hug/' },
      { label: 'Nicole Schüttners', path: '/nicole-schuettners/' },
      { label: 'Claudia Wollbrecht-Schulte', path: '/claudia-wollbrecht-schulte/' },
      { label: 'Stephan Kuwert', path: '/stephan-kuwert/' },
      { label: 'Achim Fleig', path: '/achim-fleig/' },
      { label: 'Gerhard Sökeland', path: '/gerhard-soekeland/' },
      { label: 'Fabian Doyscher', path: '/fabian-doyscher/' },
      { label: 'Philipp Sebastian Hug', path: '/philipp-sebastian-hug/' },
    ],
  },
  { label: 'Notare', path: '/notare/' },
  {
    label: 'Rechtsgebiete',
    path: '/sample-page/',
    children: [
      { label: 'Wirtschaftsrecht', path: '/1216-2/' },
      { label: 'Arbeitsrecht', path: '/arbeitsrecht/' },
      { label: 'Bank- und Kapitalmarktrecht', path: '/bank-und-kapitalmarktrecht/' },
      { label: 'Erbrecht', path: '/erbrecht/' },
      { label: 'Familienrecht', path: '/familienrecht/' },
      { label: 'Forderungseinzug / Inkassoservice', path: '/forderungseinzug-inkassoservice/' },
      { label: 'Immobilienrecht', path: '/immobilienrecht/' },
      { label: 'Notariat', path: '/notariat/' },
      { label: 'Sanierungs- und Insolvenzrecht', path: '/sanierungs-und-insolvenzrecht/' },
      { label: 'Verkehrsrecht', path: '/verkehrsrecht/' },
    ],
  },
  { label: 'Formulare', path: '/formulare/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="container-wide" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-start group"
            aria-label="Schüttners Hug & Partner - Startseite"
          >
            <span className="text-xl md:text-2xl font-serif font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
              Schüttners Hug & Partner
            </span>
            <span className="text-xs md:text-sm text-primary-600 tracking-wide">
              Rechtsanwälte und Notare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.path} className="relative nav-item group">
                {item.children ? (
                  <>
                    <Link
                      href={item.path}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                        isActive(item.path)
                          ? 'text-primary-900 bg-primary-50'
                          : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                      }`}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                    <div className="nav-dropdown" role="menu">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="nav-dropdown-item"
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'text-primary-900 bg-primary-50'
                        : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/kontakt/" className="btn-primary ml-4">
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-primary-700 hover:text-primary-900 hover:bg-primary-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-neutral-200 py-4"
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.path}>
                  {item.children ? (
                    <>
                      <button
                        className={`w-full flex items-center justify-between px-4 py-3 text-left text-base font-medium rounded-md ${
                          isActive(item.path)
                            ? 'text-primary-900 bg-primary-50'
                            : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                        }`}
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.path ? null : item.path)
                        }
                        aria-expanded={openDropdown === item.path}
                      >
                        {item.label}
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openDropdown === item.path ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === item.path && (
                        <div className="pl-4 space-y-1 mt-1">
                          <Link
                            href={item.path}
                            className="block px-4 py-2 text-sm text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md"
                          >
                            Übersicht
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              className="block px-4 py-2 text-sm text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 text-base font-medium rounded-md ${
                        isActive(item.path)
                          ? 'text-primary-900 bg-primary-50'
                          : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/kontakt/"
                className="block mx-4 mt-4 btn-primary text-center"
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
