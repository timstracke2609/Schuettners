import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Fabian Doyscher',
  description: 'Fabian Doyscher - Rechtsanwalt für Miet- und Wohnungseigentumsrecht bei Schüttners Hug & Partner mbB in Dortmund.',
}

export default function FabianDoyscherPage() {
  return (
    <AttorneyProfilePage
      name="Fabian Doyscher"
      title="Rechtsanwalt"
      email="doyscher@schuettners.de"
      specializations={[
        'Miet- und Wohnungseigentumsrecht',
        'Öffentliches Baurecht',
      ]}
      content={
        <>
          <h2>Tätigkeitsschwerpunkte</h2>
          <p>
            Fabian Doyscher konzentriert sich vorwiegend auf Miet- und Wohnungseigentumsangelegenheiten sowie privates Baurecht. Seine Arbeit umfasst Fragen der Vertragsgestaltung sowie die Durchsetzung und Abwehr von streitigen Ansprüchen.
          </p>

          <h3>Öffentliches Baurecht</h3>
          <p>
            Im öffentlichen Baurecht befasst er sich mit sämtlichen Problemstellungen auf dem Gebiet des öffentlichen Baurechts, insbesondere solche des Genehmigungsverfahrens oder nachbarrechtlicher Streitigkeiten.
          </p>

          <h2>Akademischer Hintergrund</h2>
          <p>
            Er entwickelte umfangreiche Expertise durch einen universitären Schwerpunkt im öffentlichen Recht.
          </p>

          <h2>Leistungen</h2>
          <p>
            Doyscher vertritt Mandanten sowohl in außergerichtlichen Beratungen und Verhandlungen als auch in Gerichtsverfahren.
          </p>
        </>
      }
    />
  )
}
