import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import AttorneyCard from '@/components/AttorneyCard'
import ContactBlock from '@/components/ContactBlock'

export const metadata: Metadata = {
  title: 'Notare',
  description: 'Unsere Notare bei Schüttners Hug & Partner mbB in Dortmund. Notarielle Dienstleistungen im Immobilienrecht, Gesellschaftsrecht und mehr.',
}

const notaries = [
  {
    name: 'Hans-Peter Hug',
    title: 'Notar, Fachanwalt für Handels- und Gesellschaftsrecht',
    specializations: ['Handels- und Gesellschaftsrecht', 'Erbrecht'],
    email: 'hug@schuettners.de',
    href: '/hans-peter-hug/',
  },
  {
    name: 'Stephan Kuwert',
    title: 'Notar, Fachanwalt für Miet- und Wohnungseigentumsrecht, Fachanwalt für Bau- und Architektenrecht',
    specializations: ['Miet- und Wohnungseigentumsrecht', 'Bau- und Architektenrecht'],
    email: 'kuwert@schuettners.de',
    href: '/stephan-kuwert/',
  },
]

export default function NotarePage() {
  return (
    <>
      <PageHero
        title="Notare"
        subtitle="Unsere Notare bieten Ihnen schnelle und zuverlässige notarielle Dienstleistungen."
        breadcrumb={[{ label: 'Notare', href: '/notare/' }]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-primary-700 leading-relaxed">
              Notare sind von der Rechtsordnung geforderte Spezialisten. Als neutrale Berater arbeiten wir gemeinsam mit Ihnen an maßgeschneiderten Lösungen, die durch notarielle Beurkundung dokumentiert werden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {notaries.map((notary) => (
              <AttorneyCard key={notary.href} {...notary} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8 text-center">
            Notarielle Tätigkeiten
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-primary-900 mb-3">Immobilienrecht</h3>
              <p className="text-primary-600">Grundstückskaufverträge, Wohnungseigentumsverträge, Bauträgerverträge, Überlassungs- und Schenkungsverträge.</p>
            </div>
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-primary-900 mb-3">Gesellschaftsrecht</h3>
              <p className="text-primary-600">Unternehmenskäufe, M&A-Transaktionen, Anteilsübertragungen, Gesellschaftsgründungen, Satzungsänderungen.</p>
            </div>
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-primary-900 mb-3">Erbrecht</h3>
              <p className="text-primary-600">Erbverträge, Vermögensübertragungen, Erbausschlagungen, notarielle Testamente.</p>
            </div>
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-primary-900 mb-3">Familienrecht</h3>
              <p className="text-primary-600">Eheverträge, Scheidungsfolgenvereinbarungen, Vorsorgevollmachten, Patientenverfügungen.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  )
}
