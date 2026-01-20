import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import AttorneyCard from '@/components/AttorneyCard'
import ContactBlock from '@/components/ContactBlock'

export const metadata: Metadata = {
  title: 'Rechtsanwälte',
  description: 'Unsere Rechtsanwälte bei Schüttners Hug & Partner mbB in Dortmund. Fachanwälte für Arbeitsrecht, Familienrecht, Bank- und Kapitalmarktrecht und mehr.',
}

const attorneys = [
  {
    name: 'Prof. Joachim Schüttners',
    title: 'Rechtsanwalt',
    specializations: ['Fachanwalt für Bank- und Kapitalmarktrecht'],
    email: 'kanzlei@schuettners.de',
    href: '/prof-joachim-schuettners/',
  },
  {
    name: 'Hans-Peter Hug',
    title: 'Rechtsanwalt und Notar',
    specializations: ['Fachanwalt für Handels- und Gesellschaftsrecht', 'Fachanwalt für Erbrecht'],
    email: 'hug@schuettners.de',
    href: '/hans-peter-hug/',
  },
  {
    name: 'Nicole Schüttners',
    title: 'Rechtsanwältin',
    specializations: ['Fachanwältin für Arbeitsrecht'],
    email: 'n.schuettners@schuettners.de',
    href: '/nicole-schuettners/',
  },
  {
    name: 'Claudia Wollbrecht-Schulte',
    title: 'Rechtsanwältin',
    specializations: ['Fachanwältin für Familienrecht'],
    email: 'wollbrecht@schuettners.de',
    href: '/claudia-wollbrecht-schulte/',
  },
  {
    name: 'Stephan Kuwert',
    title: 'Rechtsanwalt und Notar',
    specializations: ['Fachanwalt für Miet- und Wohnungseigentumsrecht', 'Fachanwalt für Bau- und Architektenrecht'],
    email: 'kuwert@schuettners.de',
    href: '/stephan-kuwert/',
  },
  {
    name: 'Achim Fleig',
    title: 'Rechtsanwalt',
    specializations: ['Fachanwalt für Bank- und Kapitalmarktrecht'],
    email: 'kanzlei@schuettners.de',
    href: '/achim-fleig/',
  },
  {
    name: 'Gerhard Sökeland',
    title: 'Rechtsanwalt',
    specializations: ['Gesellschaftsrecht', 'Internationales Privatrecht'],
    email: 'soekeland@schuettners.de',
    href: '/gerhard-soekeland/',
  },
  {
    name: 'Fabian Doyscher',
    title: 'Rechtsanwalt',
    specializations: ['Miet- und Wohnungseigentumsrecht', 'Öffentliches Baurecht'],
    email: 'doyscher@schuettners.de',
    href: '/fabian-doyscher/',
  },
  {
    name: 'Philipp Sebastian Hug',
    title: 'Rechtsanwalt',
    specializations: [],
    email: 'p.hug@schuettners.de',
    href: '/philipp-sebastian-hug/',
  },
]

export default function RechtsanwaeltePage() {
  return (
    <>
      <PageHero
        title="Rechtsanwälte"
        subtitle="Unsere erfahrenen Rechtsanwälte und Fachanwälte stehen Ihnen in allen Rechtsfragen kompetent zur Seite."
        breadcrumb={[{ label: 'Rechtsanwälte', href: '/rechtsanwaelte/' }]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.href} {...attorney} />
            ))}
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  )
}
