import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Immobilienrecht',
  description: 'Immobilienrecht bei Schüttners Hug & Partner mbB. Grundstückskauf, Mietrecht, Baurecht und WEG-Recht.',
}

const relatedAreas = [
  { title: 'Notariat', href: '/notariat/' },
  { title: 'Erbrecht', href: '/erbrecht/' },
  { title: 'Bank- und Kapitalmarktrecht', href: '/bank-und-kapitalmarktrecht/' },
]

export default function ImmobilienrechtPage() {
  return (
    <PracticeAreaPage
      title="Immobilienrecht"
      relatedAreas={relatedAreas}
      content={
        <>
          <p>
            Wir beraten in verschiedenen Aspekten des Immobilienrechts über mehrere Rechtsgebiete hinweg. Das Immobilienrecht umfasst Bau- und Architektenleistungen, einschließlich Vorschriften zu Grundstücken, Gebäuden sowie Miet- und Pachtverträgen. Umfassende Beratung erfordert fachübergreifendes Wissen in Finanzierung, Kapitalanlagerecht, Steuerrecht und Erbrecht.
          </p>
          <p>
            Beim Erwerb von Immobilien stehen typischerweise stabile Wertentwicklung und sichere Altersvorsorge im Mittelpunkt. Der Weg zum Immobilieneigentum ist jedoch oft mit erheblichen Hindernissen und Komplikationen verbunden, die häufig bereits während der Bauphase beginnen.
          </p>

          <h2>Beratungsschwerpunkte</h2>
          <p>
            Ob für Wohn- oder Gewerbeimmobilien, Streitigkeiten entstehen typischerweise unter Beteiligung mehrerer Parteien. Unsere Beratungsleistungen umfassen:
          </p>
          <ul>
            <li>Baurecht</li>
            <li>Architektenrecht</li>
            <li>Steuerrecht</li>
            <li>Mietrecht</li>
            <li>Wohnungseigentumsrecht</li>
            <li>Notarielle Dienstleistungen</li>
            <li>Erbrecht</li>
          </ul>

          <h2>Weitere Leistungen</h2>
          <p>
            Wir bieten Beratungsleistungen zu Immobilienverkäufen oder -vermietungen unter Berücksichtigung steuerlicher Auswirkungen. Ein zunehmender Mandantenbedarf konzentriert sich auf den Erwerb von Immobilien im Ausland.
          </p>
        </>
      }
    />
  )
}
