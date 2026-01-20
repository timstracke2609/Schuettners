import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Sanierungs- und Insolvenzrecht',
  description: 'Sanierungs- und Insolvenzrecht bei Schüttners Hug & Partner mbB. Beratung bei Unternehmenskrisen und Insolvenzverfahren.',
}

const relatedAreas = [
  { title: 'Wirtschaftsrecht', href: '/1216-2/' },
  { title: 'Bank- und Kapitalmarktrecht', href: '/bank-und-kapitalmarktrecht/' },
  { title: 'Arbeitsrecht', href: '/arbeitsrecht/' },
]

export default function SanierungsUndInsolvenzrechtPage() {
  return (
    <PracticeAreaPage
      title="Sanierungs- und Insolvenzrecht"
      relatedAreas={relatedAreas}
      content={
        <>
          <h2>Insolvenzrecht</h2>
          <p>
            Unternehmen in Krisen können durch frühzeitigen fachkundigen Rat unterstützt werden. Unsere Spezialisten prüfen Sanierungschancen und Haftungsfragen sowie Schadensersatzansprüche. Bei unvermeidbarer Insolvenz vertreten wir Interessen im Liquidations- bzw. Insolvenzverfahren. Unsere Kanzlei verfügt über langjährige Erfahrung in außergerichtlicher Beratung und Insolvenzverwalter-Beratung.
          </p>

          <h2>Unternehmenssanierung</h2>
          <p>
            Finanzielle oder strukturelle Krisen erfordern oft Sanierung und Restrukturierung. Unsere Rechtsanwälte fungieren als Experten bei komplexen Sanierungsaufgaben und moderieren zwischen verschiedenen Anforderungen im Restrukturierungsprozess.
          </p>

          <h2>Fortführung aus der Insolvenz</h2>
          <p>
            Wir unterstützen Geschäftsführer und Gesellschafter bei Folgeproblemen wie Bürgschaften, Haftungsansprüchen und strafrechtlichen Ermittlungen. Für Arbeitnehmer bieten wir Beratung zu Insolvenzgeld, Kündigungen und Masseverbindlichkeiten.
          </p>

          <h2>Insolvenzanfechtung</h2>
          <p>
            Gute Verträge müssen insolvenzfest sein – diesen Anspruch verfolgen wir bei Vertragsverhandlungen. Wir wehren unberechtigte Anfechtungsansprüche ab und unterstützen Insolvenzverwalter.
          </p>

          <h2>Gläubigervertretung</h2>
          <p>
            Wir unterstützen Insolvenzgläubiger bei Anmeldung und Realisierung ihrer Forderungen zur Beeinflussung der Befriedigungsaussichten.
          </p>
        </>
      }
    />
  )
}
