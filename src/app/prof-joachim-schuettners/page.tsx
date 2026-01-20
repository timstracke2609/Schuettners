import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Prof. Joachim Schüttners',
  description: 'Prof. Joachim Schüttners - Fachanwalt für Bank- und Kapitalmarktrecht bei Schüttners Hug & Partner mbB in Dortmund.',
}

export default function ProfJoachimSchuettnersPage() {
  return (
    <AttorneyProfilePage
      name="Prof. Joachim Schüttners"
      title="Rechtsanwalt"
      email="kanzlei@schuettners.de"
      specializations={[
        'Fachanwalt für Bank- und Kapitalmarktrecht',
        'Sanierungs- und Insolvenzmanagement',
        'Sportrecht',
        'Dipl.-Sachverständiger (DIA) für die Bewertung von bebauten und unbebauten Grundstücken, Mieten und Pachten',
        'Hochschul-Lehrer',
      ]}
      content={
        <>
          <h2>Tätigkeitsschwerpunkte</h2>
          <p>
            Prof. Joachim Schüttners ist Fachanwalt für Bank- und Kapitalmarktrecht. Seine Tätigkeitsschwerpunkte liegen im Bereich des Sanierungs- und Insolvenzmanagements sowie im Sportrecht.
          </p>

          <h2>Zusätzliche Qualifikationen</h2>
          <p>
            Neben seiner anwaltlichen Tätigkeit ist Prof. Schüttners als Dipl.-Sachverständiger (DIA) für die Bewertung von bebauten und unbebauten Grundstücken, Mieten und Pachten qualifiziert. Darüber hinaus ist er als Hochschul-Lehrer tätig.
          </p>
        </>
      }
    />
  )
}
