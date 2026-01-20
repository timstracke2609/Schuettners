import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Stephan Kuwert',
  description: 'Stephan Kuwert - Rechtsanwalt und Notar, Fachanwalt für Bau- und Architektenrecht bei Schüttners Hug & Partner mbB.',
}

export default function StephanKuwertPage() {
  return (
    <AttorneyProfilePage
      name="Stephan Kuwert"
      title="Rechtsanwalt und Notar"
      email="kuwert@schuettners.de"
      specializations={[
        'Fachanwalt für Bau- und Architektenrecht',
        'Fachanwalt für Miet- und Wohnungseigentumsrecht',
        'Notar',
      ]}
      content={
        <>
          <h2>Tätigkeitsschwerpunkte</h2>
          <p>
            Stephan Kuwert bearbeitet Angelegenheiten im gesamten privaten Immobilienrecht, von der Vertragsgestaltung und außergerichtlichen Vertretung bis hin zur Prozessführung in verschiedenen Regionen. Seine Arbeit umfasst die rechtliche Begleitung von umfangreichen Bauprojekten, typischerweise in Abstimmung mit Architekten, Planern und Baufachleuten.
          </p>

          <h2>Notarielle Tätigkeit</h2>
          <p>
            Seit 2015 ist er als Notar tätig und verwaltet das gesamte Spektrum notarieller Dienstleistungen.
          </p>

          <h2>Akademische Tätigkeit</h2>
          <p>
            Er lehrt Wirtschaftsprivatrecht am Campus Dortmund der ISM International School of Management.
          </p>
        </>
      }
    />
  )
}
