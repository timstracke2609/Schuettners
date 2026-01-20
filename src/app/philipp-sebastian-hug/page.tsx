import { Metadata } from 'next'
import AttorneyProfilePage from '@/components/AttorneyProfilePage'

export const metadata: Metadata = {
  title: 'Philipp Sebastian Hug',
  description: 'Philipp Sebastian Hug - Rechtsanwalt bei Schüttners Hug & Partner mbB in Dortmund.',
}

export default function PhilippSebastianHugPage() {
  return (
    <AttorneyProfilePage
      name="Philipp Sebastian Hug"
      title="Rechtsanwalt"
      email="p.hug@schuettners.de"
      specializations={[]}
      content={
        <>
          <h2>Zur Person</h2>
          <p>
            Philipp Hug wurde in Dortmund geboren und ist deutscher Jurist. Er entschied sich nach Abschluss seines 2. Staatsexamens für eine Karriere als Rechtsanwalt und trat am 1. Januar 2023 in die Kanzlei ein.
          </p>

          <h2>Tätigkeitsbereich</h2>
          <p>
            Die Kanzlei bietet Dienstleistungen in mehreren Rechtsgebieten an, darunter Arbeitsrecht, Bank- und Kapitalmarktrecht, Erbrecht, Familienrecht, Immobilienrecht, Insolvenzrecht, Verkehrsrecht und Wirtschaftsrecht.
          </p>
        </>
      }
    />
  )
}
