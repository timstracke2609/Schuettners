import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Familienrecht',
  description: 'Fachanwältin für Familienrecht bei Schüttners Hug & Partner mbB. Scheidung, Unterhalt, Sorgerecht und Eheverträge.',
}

const relatedAreas = [
  { title: 'Erbrecht', href: '/erbrecht/' },
  { title: 'Notariat', href: '/notariat/' },
]

export default function FamilienrechtPage() {
  return (
    <PracticeAreaPage
      title="Familienrecht"
      relatedAreas={relatedAreas}
      content={
        <>
          <p>
            Familienrechtliche Angelegenheiten sind emotional herausfordernd. Trennung oder Scheidung stellen eine tiefgreifende Störung im Leben und in den Finanzen der Mandanten dar. Frühzeitige rechtliche Beratung ist wichtig, um Streitigkeiten zu vermeiden, die aus rechtlichen Missverständnissen entstehen.
          </p>

          <h2>Ihre Ansprechpartnerin</h2>
          <p>
            <strong>Claudia Wollbrecht-Schulte</strong> – Rechtsanwältin und Fachanwältin für Familienrecht – bietet Vertretung durch alle Phasen, von der Erstberatung bis zum Gerichtsverfahren.
          </p>

          <h2>Schwerpunkte</h2>
          <ul>
            <li>Ehegattenunterhalt</li>
            <li>Ehevertrag</li>
            <li>Erziehungsrecht</li>
            <li>Güterrecht</li>
            <li>Kinderschutz- und Ehegattenschutzklausel</li>
            <li>Kindesunterhalt</li>
            <li>Nachehelicher Unterhalt</li>
            <li>Scheidung</li>
            <li>Scheidungsfolgenvereinbarung</li>
            <li>Selbstbehalt</li>
            <li>Sorgerecht</li>
            <li>Trennungsunterhalt</li>
            <li>Umgangsrecht</li>
            <li>Vormundschaft</li>
            <li>Vorsorgevollmacht</li>
            <li>Zugewinn</li>
          </ul>
        </>
      }
    />
  )
}
