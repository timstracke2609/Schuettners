import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Bank- und Kapitalmarktrecht',
  description: 'Fachanwälte für Bank- und Kapitalmarktrecht bei Schüttners Hug & Partner mbB. Beratung für Banken, Finanzdienstleister und Anleger.',
}

const relatedAreas = [
  { title: 'Wirtschaftsrecht', href: '/1216-2/' },
  { title: 'Sanierungs- und Insolvenzrecht', href: '/sanierungs-und-insolvenzrecht/' },
  { title: 'Immobilienrecht', href: '/immobilienrecht/' },
]

export default function BankUndKapitalmarktrechtPage() {
  return (
    <PracticeAreaPage
      title="Bank- und Kapitalmarktrecht"
      relatedAreas={relatedAreas}
      content={
        <>
          <p>
            Kaum ein anderer Rechtsbereich ist in den letzten Jahren so sehr von neuen Verordnungen, Richtlinien und Gesetzen geprägt wie das Bank- und Kapitalmarktrecht.
          </p>
          <p>
            Wir beraten Mandanten in vertraglichen Arrangements zwischen Banken und Kunden sowie in öffentlich-rechtlichen Angelegenheiten und vertreten Banken, Finanzdienstleister, Unternehmen und Privatpersonen.
          </p>

          <h2>Themengebiete</h2>
          <ul>
            <li>Kapitalanlagerecht</li>
            <li>Kreditrecht</li>
            <li>Leasing</li>
            <li>Sicherheiten</li>
            <li>Insolvenzrecht</li>
            <li>Bankenaufsicht</li>
            <li>Immobilienfonds</li>
            <li>Altersvorsorge</li>
          </ul>

          <h2>Kreditvertragsrecht / Kreditsicherheiten</h2>
          <p>
            Wir prüfen Kreditverträge vor Abschluss und beraten zu Kreditsicherungsmechanismen (Hypotheken, Sicherungsübereignung, Bürgschaften). Unsere Leistungen umfassen die Prüfung von Zinsberechnungen, Vertragsverletzungen, Kündigungsrechten sowie die Durchsetzung von Ansprüchen oder Abwehr unberechtigter Forderungen.
          </p>

          <h2>Girovertragsrecht / Zahlungsverkehr</h2>
          <p>
            Unsere Beratung umfasst Zahlungsverkehrsfragen einschließlich nicht autorisierter Überweisungen, Kartenbetrug, Interbankenforderungen, Fehlüberweisungen und Abwicklungsverzögerungen.
          </p>

          <h2>Anlageberatung / Kapitalanlage</h2>
          <p>
            Wir bearbeiten Streitigkeiten aus Anlageberatung, Vermögensverwaltungsverträgen, Aktien, Fonds, Anleihen und digitalen Währungen.
          </p>

          <h2>Weitere Spezialisierungen</h2>
          <ul>
            <li>Bank- und Finanzdienstleistungsaufsichtsrecht</li>
            <li>Factoring, Leasing und alternative Finanzierungsarrangements</li>
          </ul>
        </>
      }
    />
  )
}
