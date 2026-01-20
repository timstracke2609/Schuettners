import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Achim Fleig',
  description: 'Achim Fleig - Fachanwalt für Bank- und Kapitalmarktrecht bei Schüttners Hug & Partner mbB in Dortmund.',
}

export default function AchimFleigPage() {
  return (
    <AttorneyProfilePage
      name="Achim Fleig"
      title="Rechtsanwalt"
      email="kanzlei@schuettners.de"
      specializations={[
        'Bankkaufmann',
        'Fachanwalt für Bank- und Kapitalmarktrecht',
        'Vergaberecht',
      ]}
      content={
        <>
          <h2>Tätigkeitsschwerpunkte</h2>
          <ul>
            <li>Bank- und Kapitalmarktrecht</li>
            <li>Insolvenz- und Sanierungsrecht</li>
            <li>Wirtschaftsrecht</li>
            <li>Versicherungsrecht</li>
            <li>Vergaberecht</li>
          </ul>

          <h2>Qualifikationen</h2>
          <p>
            Fleig absolvierte seine Fachanwaltsausbildung im Bank- und Kapitalmarktrecht im Jahr 2008 und erlangte 2019 seine Zertifizierung im Vergaberecht. Sein bankfachlicher Hintergrund ergänzt seine rechtliche Expertise in diesen Bereichen.
          </p>

          <h2>Berufliche Erfahrung</h2>
          <p>
            Er war mehrere Jahre bei einer großen Frankfurter Kanzlei tätig, wo er umfangreiche Kenntnisse im Insolvenzrecht erwarb. Er berät Unternehmen, die sich potenziellen Krisen und Insolvenzangelegenheiten gegenübersehen.
          </p>

          <h2>Zusätzliche Tätigkeiten</h2>
          <p>
            Innerhalb der Kanzlei bearbeitet Fleig Steuerrechtsangelegenheiten und die zivilprozessuale Vertretung.
          </p>
        </>
      }
    />
  )
}
