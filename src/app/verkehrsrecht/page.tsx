import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Verkehrsrecht',
  description: 'Verkehrsrecht bei Schüttners Hug & Partner mbB. Unfallregulierung, Bußgeldverfahren und Fahrerlaubnisrecht.',
}

const relatedAreas = [
  { title: 'Forderungseinzug / Inkassoservice', href: '/forderungseinzug-inkassoservice/' },
]

export default function VerkehrsrechtPage() {
  return (
    <PracticeAreaPage
      title="Verkehrsrecht"
      relatedAreas={relatedAreas}
      content={
        <>
          <h2>Verkehrsunfallrecht</h2>
          <ul>
            <li>Fahrzeug- oder Fahrradschadensersatz, Ladung, Kleidung, Nutzungsausfall</li>
            <li>Personenschadensersatz einschließlich Schmerzensgeld, Haushaltsführungskosten, Verdienstausfall, Pflegekosten, zusätzliche Behandlungskosten</li>
          </ul>

          <h2>Ordnungswidrigkeitenrecht / Bußgeldsachen / Verkehrsstrafrecht</h2>
          <ul>
            <li>Geschwindigkeitsverstöße</li>
            <li>Rotlichtverstöße</li>
            <li>Unfallflucht</li>
            <li>Trunkenheit am Steuer</li>
            <li>Nötigung / Beleidigung</li>
            <li>Gefährlicher Eingriff in den Straßenverkehr</li>
            <li>Straßenverkehrsgefährdung</li>
            <li>Fahrlässige Körperverletzung (ggf. mit Todesfolge)</li>
          </ul>

          <h2>Fahrerlaubnisrecht</h2>
          <ul>
            <li>Fragen zur Fahreignung</li>
            <li>Medizinisch-psychologische Untersuchung (MPU)</li>
            <li>Führerscheinentzug</li>
            <li>Probezeitfragen</li>
          </ul>

          <h2>Pkw-Vertragsrecht</h2>
          <ul>
            <li>Vertragsgestaltung bei Autokäufen</li>
            <li>Mängelhaftung einschließlich Nacherfüllung, Schadensersatz, Minderung, Rücktritt</li>
            <li>Arglistige Täuschung und Anfechtung</li>
          </ul>

          <h2>Leasingrecht</h2>
          <ul>
            <li>Privates oder gewerbliches Leasing</li>
            <li>Fahrzeugrückgabefragen</li>
          </ul>
        </>
      }
    />
  )
}
