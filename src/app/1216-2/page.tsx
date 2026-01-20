import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Wirtschaftsrecht',
  description: 'Wirtschaftsrecht bei Schüttners Hug & Partner mbB. Gesellschaftsrecht, Unternehmenskauf und Vertragsgestaltung.',
}

const relatedAreas = [
  { title: 'Arbeitsrecht', href: '/arbeitsrecht/' },
  { title: 'Bank- und Kapitalmarktrecht', href: '/bank-und-kapitalmarktrecht/' },
  { title: 'Sanierungs- und Insolvenzrecht', href: '/sanierungs-und-insolvenzrecht/' },
]

export default function WirtschaftsrechtPage() {
  return (
    <PracticeAreaPage
      title="Wirtschaftsrecht"
      relatedAreas={relatedAreas}
      content={
        <>
          <p>
            Unternehmen, die am Wirtschaftsverkehr teilnehmen, müssen zahlreiche nationale und internationale Gesetze in verschiedenen Rechtsbereichen einhalten, darunter Handelsrecht, Wettbewerbsrecht und Außenhandelsvorschriften.
          </p>

          <h2>Die Herausforderung</h2>
          <p>
            Unternehmer und Gründer stehen täglich vor komplexen rechtlichen Fragen, die allein schwer zu bewältigen sind. Frühzeitige rechtliche Beratung hilft, potenzielle Fehler und Verstöße zu erkennen und zu vermeiden.
          </p>

          <h2>Beratungsschwerpunkte</h2>
          <p>
            Wir beraten bei: Unternehmens- und Anteilskäufen/-verkäufen, Wahl geeigneter Unternehmensformen, Restrukturierung, Vertragsgestaltung und Streitbeilegung.
          </p>

          <h2>Unser Ansatz</h2>
          <p>
            Die Kanzlei kombiniert wirtschaftliches Fachwissen mit rechtlicher Spezialisierung in Bereichen wie Personalmanagement, Steuerrecht, Finanzdienstleistungen und Insolvenzmanagement.
          </p>

          <h2>Rechtsgebiete</h2>
          <ul>
            <li>Vertragsgestaltung und -verhandlung</li>
            <li>Gesellschafts- und steuerrechtliche Transaktionsprüfung</li>
            <li>Unternehmensgründung und Umstrukturierung</li>
            <li>Fusionen und Übernahmen</li>
            <li>Unternehmensrestrukturierung und -reorganisation</li>
            <li>Insolvenzverwaltung</li>
            <li>Personalangelegenheiten</li>
            <li>Wirtschaftsstreitigkeiten</li>
            <li>Arbeits- und Beschäftigungsrecht</li>
            <li>Geistiges Eigentum (Patente, Marken, Designs)</li>
            <li>Vertriebs- und Wettbewerbsrecht</li>
            <li>Wirtschaftsstrafrecht</li>
          </ul>
        </>
      }
    />
  )
}
