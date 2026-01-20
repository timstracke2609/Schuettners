import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Hans-Peter Hug',
  description: 'Hans-Peter Hug - Rechtsanwalt und Notar, Fachanwalt für Handels- und Gesellschaftsrecht bei Schüttners Hug & Partner mbB.',
}

export default function HansPeterHugPage() {
  return (
    <AttorneyProfilePage
      name="Hans-Peter Hug"
      title="Rechtsanwalt und Notar"
      email="hug@schuettners.de"
      specializations={[
        'Fachanwalt für Handels- und Gesellschaftsrecht',
        'Fachanwalt für Erbrecht',
        'Notar',
        'Zertifizierter Testamentsvollstrecker',
      ]}
      content={
        <>
          <h2>Tätigkeitsschwerpunkte</h2>
          <p>
            Hans-Peter Hug ist tätig als Rechtsanwalt und Notar sowie Fachanwalt für Handels- und Gesellschaftsrecht und Fachanwalt für Erbrecht.
          </p>

          <p>
            Als Spezialist im Erb- und Gesellschaftsrecht berät Hug Mandanten bei Vermögens- und Unternehmensnachfolgen. Seine Arbeitsgebiete umfassen:
          </p>

          <ul>
            <li>Gründung, Übertragung und Umwandlung von Unternehmen</li>
            <li>Immobilienrecht</li>
            <li>Vertretung von Gesellschaftern, Gesellschaften und deren Organen bei streitigen Auseinandersetzungen</li>
            <li>Betreuung bei gerichtlichen und außergerichtlichen Erbauseinandersetzungen</li>
            <li>Notarielle Tätigkeiten</li>
          </ul>

          <h2>Zusätzliche Zertifizierung</h2>
          <p>
            Hug ist zertifizierter Testamentsvollstrecker der Arbeitsgemeinschaft Testamentsvollstreckung und Vermögensvorsorge e.V.
          </p>
        </>
      }
    />
  )
}
