import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import PracticeAreaCard from '@/components/PracticeAreaCard'
import ContactBlock from '@/components/ContactBlock'

export const metadata: Metadata = {
  title: 'Rechtsgebiete',
  description: 'Unsere Rechtsgebiete bei Schüttners Hug & Partner mbB. Wirtschaftsrecht, Arbeitsrecht, Familienrecht, Erbrecht, Immobilienrecht und mehr.',
}

const practiceAreas = [
  {
    title: 'Wirtschaftsrecht',
    description: 'Interdisziplinäre ganzheitliche Beratung im nationalen und internationalen Wirtschaftsrecht für kleine und mittelständische Unternehmen.',
    href: '/1216-2/',
  },
  {
    title: 'Notariat',
    description: 'Notare als von der Rechtsordnung geforderte Spezialisten. Schnelle und zuverlässige notarielle Dienstleistungen.',
    href: '/notariat/',
  },
  {
    title: 'Immobilienrecht',
    description: 'Umfassende Beratung im Immobilienrecht, von notariellen Urkunden über Architektenverträge bis zum Mietrecht und WEG-Recht.',
    href: '/immobilienrecht/',
  },
  {
    title: 'Arbeitsrecht',
    description: 'Arbeitsrechtliche Regelungen von erheblicher wirtschaftlicher Bedeutung für Arbeitgeber und Arbeitnehmer.',
    href: '/arbeitsrecht/',
  },
  {
    title: 'Sanierungs- und Insolvenzrecht',
    description: 'Beratung von Insolvenzverwaltern, krisenbetroffenen Unternehmen und Gläubigern aus langjähriger Erfahrung.',
    href: '/sanierungs-und-insolvenzrecht/',
  },
  {
    title: 'Familienrecht',
    description: 'Beratung in Fragen zu Unterhalt, Sorgerecht, Trennung und Scheidung.',
    href: '/familienrecht/',
  },
  {
    title: 'Bank- und Kapitalmarktrecht',
    description: 'Beratung in vertraglichen Arrangements zwischen Banken und Finanzdienstleistungen.',
    href: '/bank-und-kapitalmarktrecht/',
  },
  {
    title: 'Forderungseinzug / Inkassoservice',
    description: 'Effektives Forderungsmanagement und Inkassoservice für Unternehmen.',
    href: '/forderungseinzug-inkassoservice/',
  },
  {
    title: 'Erbrecht',
    description: 'Der Erbfall als häufig größte Gefahr für geschaffenes Vermögen. Beratung zur Nachlassplanung und bei Erbstreitigkeiten.',
    href: '/erbrecht/',
  },
  {
    title: 'Verkehrsrecht',
    description: 'Erfahrene rechtliche Beratung in Verkehrs- und Transportsachen.',
    href: '/verkehrsrecht/',
  },
]

export default function RechtsgebietePage() {
  return (
    <>
      <PageHero
        title="Rechtsgebiete"
        subtitle="Umfassende rechtliche Beratung in allen relevanten Bereichen des Wirtschafts- und Privatrechts."
        breadcrumb={[{ label: 'Rechtsgebiete', href: '/sample-page/' }]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.href} {...area} />
            ))}
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  )
}
