import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Erbrecht',
  description: 'Fachanwälte für Erbrecht bei Schüttners Hug & Partner mbB. Nachlassplanung, Testamente und Erbstreitigkeiten.',
}

const relatedAreas = [
  { title: 'Familienrecht', href: '/familienrecht/' },
  { title: 'Notariat', href: '/notariat/' },
  { title: 'Immobilienrecht', href: '/immobilienrecht/' },
]

export default function ErbrechtPage() {
  return (
    <PracticeAreaPage
      title="Erbrecht"
      relatedAreas={relatedAreas}
      content={
        <>
          <p>
            Der Erbfall ist häufig die größte Gefahr für geschaffenes Vermögen. Ein Erbstreit oder die Belastung mit Erbschaftsteuer können große Werte vernichten.
          </p>
          <p>
            Die Rechtsanwälte, Fachanwälte und Notare unserer Kanzlei beraten Sie bei der Nachlassplanung und unterstützen Sie bei erbrechtlichen Streitigkeiten. Wir legen Wert auf Spezialisierung und verfügen über umfangreiche Erfahrung aus Hunderten von Erbschaftsfällen.
          </p>

          <h2>1. Planung und Gestaltung des Nachlasses und der Unternehmensnachfolge</h2>
          <p>
            Rechtzeitige Nachfolgeplanung durch testamentarische Verfügungen bietet ausreichenden Vermögensschutz. Lebzeitige Schenkungen können vorteilhaft sein, um den Zugriff durch gesetzliche Erben, Schwiegereltern oder Steuerbehörden zu verhindern.
          </p>
          <p>Wir unterstützen Sie bei:</p>
          <ul>
            <li>Einzeltestamenten</li>
            <li>Ehegattentestamenten</li>
            <li>Erbverträgen</li>
            <li>Übertragungsvereinbarungen</li>
            <li>Eheverträgen</li>
            <li>Gesellschaftsverträgen</li>
          </ul>

          <h2>2. Erbfall / Erbstreit</h2>
          <p>
            Unsere Leistungen umfassen die Beratung und Vertretung von Erben, Miterben in Erbengemeinschaften, gesetzlichen Erben und Testamentsvollstreckern. Wir bearbeiten Erbscheinsanträge, streitige Erbverfahren und verfolgen Ansprüche – wobei wir aggressive Prozessführung mit familienorientierter Lösung in Einklang bringen.
          </p>

          <h2>3. Vorsorgeverfügungen</h2>
          <p>
            Neben der Todesfallplanung befassen wir uns mit Gesundheitskrisen im fortgeschrittenen Alter durch Vorsorgevollmachten, Betreuungsverfügungen und Patientenverfügungen, um die Selbstbestimmung der Mandanten und die Geschäftskontinuität zu wahren.
          </p>
        </>
      }
    />
  )
}
