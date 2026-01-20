import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Nicole Schüttners',
  description: 'Nicole Schüttners - Fachanwältin für Arbeitsrecht bei Schüttners Hug & Partner mbB in Dortmund.',
}

export default function NicoleSchuettnersPage() {
  return (
    <AttorneyProfilePage
      name="Nicole Schüttners"
      title="Rechtsanwältin"
      email="n.schuettners@schuettners.de"
      specializations={[
        'Fachanwältin für Arbeitsrecht',
        'Verkehrsrecht',
        'Familienrecht',
      ]}
      content={
        <>
          <h2>Tätigkeitsschwerpunkte</h2>
          <p>
            Nicole Schüttners ist Rechtsanwältin und Fachanwältin für Arbeitsrecht bei Schüttners Hug & Partner mbB.
          </p>

          <h3>Arbeitsrecht</h3>
          <p>
            Frau Schüttners ist seit vielen Jahren vorwiegend im Arbeitsrecht tätig. Ihre Praxis konzentriert sich auf die außergerichtliche und gerichtliche Vertretung bei Streitigkeiten über den Bestand des Arbeitsverhältnisses, die Beratung in Personalangelegenheiten, die Verfolgung und Abwehr von Schadensersatzansprüchen sowie die Vertragsgestaltung.
          </p>

          <h3>Verkehrsrecht</h3>
          <p>
            Ihr zweiter Tätigkeitsschwerpunkt ist das Verkehrsrecht, insbesondere die Schadensabwicklung nach Verkehrsunfällen und Bußgeldverfahren.
          </p>

          <h3>Familienrecht</h3>
          <p>
            Sie bearbeitet auch familienrechtliche Angelegenheiten.
          </p>

          <h2>Mitgliedschaften</h2>
          <ul>
            <li>Deutscher Anwaltverein e.V.</li>
            <li>Arbeitsgemeinschaft Arbeitsrecht im Deutschen Anwaltverein</li>
          </ul>
        </>
      }
    />
  )
}
