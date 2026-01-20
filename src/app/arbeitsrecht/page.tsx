import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Arbeitsrecht',
  description: 'Fachanwälte für Arbeitsrecht bei Schüttners Hug & Partner mbB. Beratung für Arbeitgeber und Arbeitnehmer in Dortmund.',
}

const relatedAreas = [
  { title: 'Wirtschaftsrecht', href: '/1216-2/' },
  { title: 'Sanierungs- und Insolvenzrecht', href: '/sanierungs-und-insolvenzrecht/' },
]

export default function ArbeitsrechtPage() {
  return (
    <PracticeAreaPage
      title="Arbeitsrecht"
      subtitle="Der Rechtsanwalt für Arbeitsrecht in der Wirtschaftskanzlei"
      relatedAreas={relatedAreas}
      content={
        <>
          <p>
            Arbeitsrechtliche Regelungen sind von erheblicher wirtschaftlicher Bedeutung für Arbeitgeber und Arbeitnehmer. Die arbeitsrechtliche Arbeit in wirtschaftsnahen Kanzleien erfordert interdisziplinäre Kompetenz. Rechtsanwälte müssen neben dem klassischen Arbeitsrecht auch Steuerrecht, Gesellschaftsrecht und betriebswirtschaftliches Verständnis besitzen.
          </p>

          <h2>Unser Ansatz</h2>
          <p>
            Schüttners & Partner nutzt Spezialisierung mit kooperativer Teamarbeit. Arbeitsrechtliche Mandate werden häufig gemeinsam von Fachanwälten für Arbeitsrecht zusammen mit Gesellschaftsrechts- oder Steuerexperten bearbeitet.
          </p>

          <h2>Mandantengruppen</h2>
          <ul>
            <li>Arbeitnehmer</li>
            <li>Geschäftsführung</li>
            <li>Unternehmen</li>
          </ul>

          <h2>Kernleistungen</h2>
          <p>
            Kündigungsvertretung für Arbeitgeber und Arbeitnehmer, einschließlich schneller Erstberatung und Vertretung vor Arbeitsgerichten (Kündigungsschutzklage).
          </p>

          <h2>Schwerpunktbereiche</h2>

          <h3>Allgemeines Gleichbehandlungsgesetz (AGG)</h3>
          <p>
            Beratung zur Einhaltung des Antidiskriminierungsrechts.
          </p>

          <h3>M&A und Nachfolgeplanung</h3>
          <p>
            Arbeitsrechtliche Unterstützung bei Unternehmensübergängen und Betriebsübernahmen.
          </p>

          <h2>Arbeitsgebiete im Einzelnen</h2>

          <h3>Arbeitsverträge</h3>
          <p>
            Gestaltung und Überprüfung von befristeten/unbefristeten Arbeitsverhältnissen, Zeitarbeit, Job-Sharing, Teilzeit, Mini-Jobs, Ausbildungsverhältnissen, Dienstverträgen.
          </p>

          <h3>Geschäftsführerverträge</h3>
          <p>
            Vergütungsstrukturen, verdeckte Gewinnausschüttungen, Marktvergleiche, treuhänderische Haftung.
          </p>

          <h3>Kündigung & Aufhebung</h3>
          <p>
            Abmahnungen, Kündigungen (ordentliche/außerordentliche, betriebsbedingte/verhaltensbedingte/personenbedingte Gründe), Kündigungsschutzverfahren, Aufhebungsvereinbarungen.
          </p>

          <h3>Sozialversicherung</h3>
          <p>
            Renten-, Krankenversicherung, Selbstständigkeitseinstufung, geschäftsführerspezifische Aspekte.
          </p>

          <h3>Wettbewerbsverbote</h3>
          <p>
            Während der Beschäftigung und nachvertragliche Beschränkungen, Karenzentschädigung, Schadensersatzansprüche.
          </p>

          <h3>Kollektives Arbeitsrecht</h3>
          <p>
            Betriebsräte, Tarifverhandlungen, gewerkschaftliche Angelegenheiten.
          </p>
        </>
      }
    />
  )
}
