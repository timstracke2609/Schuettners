import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Notariat',
  description: 'Notarielle Dienstleistungen bei Schüttners Hug & Partner mbB. Beurkundungen, Grundstückskauf und Gesellschaftsrecht.',
}

const relatedAreas = [
  { title: 'Immobilienrecht', href: '/immobilienrecht/' },
  { title: 'Erbrecht', href: '/erbrecht/' },
  { title: 'Familienrecht', href: '/familienrecht/' },
  { title: 'Wirtschaftsrecht', href: '/1216-2/' },
]

export default function NotariatPage() {
  return (
    <PracticeAreaPage
      title="Notariat"
      subtitle="Wo ein Wille ist, ist ein Notar gut"
      relatedAreas={relatedAreas}
      content={
        <>
          <p>
            Unsere Notarpartnerschaft betont mandantenorientierten Service mit vertrauensvoller, flexibler und professioneller Unterstützung sowohl für geschäftliche als auch für persönliche Angelegenheiten. Als neutrale Berater arbeiten wir gemeinsam mit Ihnen an maßgeschneiderten Lösungen, die durch notarielle Beurkundung dokumentiert werden.
          </p>

          <h2>Immobilienrecht</h2>
          <p>
            Grundstücksgeschäfte, Wohnungseigentumsverträge, Bauträgerprojekte, Kaufverträge, Übertragungs- und Schenkungsverträge sowie Tauschverträge. Die Kanzlei verwaltet Grundbucheintragungen, Hypothekenbestellungen zur Kreditsicherung und Rechteregistrierungen wie Wohnrechte und Dienstbarkeiten.
          </p>

          <h2>Unternehmens- und Gesellschaftsrecht</h2>
          <p>
            Fokus auf Unternehmenskäufe, M&A-Transaktionen, Anteilsübertragungen, Unternehmensumstrukturierungen, Gesellschafterversammlungsprotokolle, Gesellschaftsgründungen, Satzungsänderungen und Handelsregistereintragungen. Leistungen verfügbar auf Englisch.
          </p>

          <h2>Erbrecht</h2>
          <p>
            Bearbeitung von Erbverträgen, Vermögensübertragungen, Erbausschlagungen und Verzichtsvereinbarungen. Notarielle Testamente verhindern Streitigkeiten, eliminieren Erbscheinkosten und werden automatisch beim Gericht registriert.
          </p>

          <h2>Familienrecht</h2>
          <p>
            Verwaltung von Eheverträgen, Scheidungsfolgenvereinbarungen, Vorsorgevollmachten und Patientenverfügungen, insbesondere wenn Immobilien- oder Geschäftsinteressen betroffen sind.
          </p>

          <h2>Weitere Tätigkeiten</h2>
          <ul>
            <li>Vereinsregistrierungen</li>
            <li>Beglaubigungen</li>
            <li>Mediationsleistungen</li>
          </ul>
        </>
      }
    />
  )
}
