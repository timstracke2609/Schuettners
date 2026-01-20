import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Claudia Wollbrecht-Schulte',
  description: 'Claudia Wollbrecht-Schulte - Fachanwältin für Familienrecht bei Schüttners Hug & Partner mbB in Dortmund.',
}

export default function ClaudiaWollbrechtSchultePage() {
  return (
    <AttorneyProfilePage
      name="Claudia Wollbrecht-Schulte"
      title="Rechtsanwältin"
      email="wollbrecht@schuettners.de"
      specializations={[
        'Fachanwältin für Familienrecht',
      ]}
      content={
        <>
          <h2>Tätigkeitsschwerpunkte</h2>
          <p>
            Claudia Wollbrecht-Schulte ist Fachanwältin für Familienrecht und verfügt über jahrzehntelange Spezialisierung in familienrechtlichen Angelegenheiten.
          </p>

          <p>Ihre Praxis umfasst umfassende familienrechtliche Dienstleistungen, darunter:</p>

          <ul>
            <li>Scheidungsverfahren</li>
            <li>Zugewinnausgleich</li>
            <li>Vermögensauseinandersetzung</li>
            <li>Unterhalt</li>
            <li>Umgang und Sorgerecht</li>
            <li>Eheverträge</li>
            <li>Scheidungsfolgenvereinbarungen</li>
          </ul>

          <h2>Arbeitsweise</h2>
          <p>
            Sie bietet interessenorientierte und mit Nachdruck geführte Vertretung. Sie betont Qualität, Seriosität und Zuverlässigkeit in ihrer Arbeit.
          </p>

          <h2>Mitgliedschaften</h2>
          <ul>
            <li>Deutscher Anwaltverein e.V.</li>
            <li>Arbeitsgemeinschaft Familienrecht im Deutschen Anwaltverein</li>
          </ul>
        </>
      }
    />
  )
}
