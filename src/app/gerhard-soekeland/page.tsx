import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Gerhard Sökeland',
  description: 'Gerhard Sökeland - Rechtsanwalt für Gesellschaftsrecht und Internationales Privatrecht bei Schüttners Hug & Partner mbB.',
}

export default function GerhardSoekelandPage() {
  return (
    <AttorneyProfilePage
      name="Gerhard Sökeland"
      title="Rechtsanwalt"
      email="soekeland@schuettners.de"
      specializations={[
        'Gesellschaftsrecht',
        'Internationales Privatrecht',
        'Spanisches Immobilienrecht',
      ]}
      content={
        <>
          <h2>Tätigkeitsschwerpunkte</h2>
          <p>
            Gerhard Sökeland ist auf Gesellschaftsrecht und Internationales Privatrecht spezialisiert.
          </p>

          <h2>Beruflicher Hintergrund</h2>
          <p>
            Zusätzlich zu seiner anwaltlichen Tätigkeit ist Sökeland geschäftsführender Vorstand eines Energieversorgungsunternehmens in Mailand, Italien.
          </p>

          <h2>Spezialisierungen</h2>
          <p>
            Sein Schwerpunkt liegt im internationalen Privatrecht. Durch die Zusammenarbeit mit einer Kooperationskanzlei in Valencia hat er sich ein weiteres Fachgebiet im spanischen Immobilienrecht entwickelt.
          </p>

          <h2>Sprachkenntnisse</h2>
          <p>
            Neben Englisch spricht Sökeland Spanisch und Italienisch.
          </p>
        </>
      }
    />
  )
}
