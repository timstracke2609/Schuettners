import { Metadata } from 'next'
import PracticeAreaPage from '@/components/PracticeAreaPage'

export const metadata: Metadata = {
  title: 'Forderungseinzug / Inkassoservice',
  description: 'Forderungseinzug und Inkassoservice bei Schüttners Hug & Partner mbB. Effektives Forderungsmanagement für Unternehmen.',
}

const relatedAreas = [
  { title: 'Wirtschaftsrecht', href: '/1216-2/' },
  { title: 'Sanierungs- und Insolvenzrecht', href: '/sanierungs-und-insolvenzrecht/' },
]

export default function ForderungseinzugPage() {
  return (
    <PracticeAreaPage
      title="Forderungseinzug / Inkassoservice"
      relatedAreas={relatedAreas}
      content={
        <>
          <p>
            Schlechte Zahlungsmoral ist problematisch für Unternehmen. Wir bieten an, als Inkassoanwalt das Forderungsmanagement zu übernehmen, sowohl für Einzelfälle als auch dauerhaft. Der Service ermöglicht es Unternehmen, auf zusätzliches Personal zu verzichten und Zahlungsausfälle zu reduzieren.
          </p>
          <p>
            Schuldner müssen die Kosten für anwaltliche Unterstützung ersetzen, während Inkassounternehmen-Gebühren von Gerichten nicht immer vollständig anerkannt werden. Nur Anwälte können das gesamte rechtliche Spektrum nutzen.
          </p>

          <h2>Unsere Arbeitsweise</h2>
          <p>
            Die Experten unserer Kanzlei verfolgen ein effektives, aber angemessenes Vorgehen und sehen sich als Vermittler zwischen Gläubiger und Schuldner. Wir prüfen Forderungen und entwickeln geeignete Inkassostrategien, um langfristige Geschäftsbeziehungen zu bewahren.
          </p>
          <p>
            Wir nutzen ein Eskalationssystem: zunächst anwaltliche Zahlungsaufforderungen, dann Mahnbescheid, Mahnverfahren, Klage oder Zwangsvollstreckung.
          </p>

          <h2>Arbeitsgebiete</h2>
          <ul>
            <li>Übernahme von Inkassomandaten und Inkassozession</li>
            <li>Beratung zum Forderungseinzug und Inkassorecht</li>
            <li>Präventive Maßnahmen gegen Zahlungsausfallrisiken</li>
            <li>Außergerichtliche und gerichtliche Geltendmachung</li>
            <li>Mahn- und Vollstreckungsverfahren</li>
            <li>Zwangsvollstreckungsmaßnahmen</li>
            <li>Bonitätsprüfung</li>
            <li>Schuldnerermittlung</li>
            <li>Forderungsanmeldung in Insolvenzverfahren</li>
            <li>Fortsetzung der Zwangsvollstreckung bei Versagung der Restschuldbefreiung</li>
          </ul>
        </>
      }
    />
  )
}
