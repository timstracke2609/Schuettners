import { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Kanzlei Schüttners Hug & Partner mbB, Rechtsanwälte und Notare in Dortmund.',
}

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        title="Impressum"
        breadcrumb={[{ label: 'Impressum', href: '/impressum/' }]}
      />

      <section className="section bg-white">
        <div className="container-narrow">
          <div className="prose-content">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Schüttners Hug & Partner mbB</strong><br />
              Rechtsanwälte und Notare<br />
              Kaiserstraße 21-23<br />
              44135 Dortmund
            </p>

            <p>
              Telefon: 0231 589694-0<br />
              Fax: 0231 589694-20<br />
              E-Mail: kanzlei@schuettners.de
            </p>

            <p>
              Öffnungszeiten: Mo-Fr: 8:30–18:00 Uhr sowie nach Vereinbarung
            </p>

            <h2>Partner der Partnerschaftsgesellschaft</h2>
            <ul>
              <li>Prof. Joachim B. Schüttners, Rechtsanwalt, Fachanwalt für Bank- und Kapitalmarktrecht</li>
              <li>Hans-Peter Hug, Rechtsanwalt und Notar, Fachanwalt für Handels- und Gesellschaftsrecht, Fachanwalt für Erbrecht</li>
              <li>Nicole Schüttners, Rechtsanwältin, Fachanwältin für Arbeitsrecht</li>
              <li>Claudia Wollbrecht-Schulte, Rechtsanwältin, Fachanwältin für Familienrecht</li>
              <li>Stephan Kuwert, Rechtsanwalt und Notar, Fachanwalt für Miet- und Wohnungseigentumsrecht, Fachanwalt für Bau- und Architektenrecht</li>
              <li>Achim Fleig, Rechtsanwalt, Fachanwalt für Bank- und Kapitalmarktrecht</li>
              <li>Gerhard Sökeland, Rechtsanwalt</li>
              <li>Fabian Doyscher, Rechtsanwalt</li>
              <li>Philipp Sebastian Hug, Rechtsanwalt</li>
            </ul>

            <h2>Registereintrag</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer: DE177113344<br />
              Registergericht: Amtsgericht Essen<br />
              Registernummer: PR 3232
            </p>

            <h2>Berufsrechtliche Angaben</h2>

            <h3>Rechtsanwälte</h3>
            <p>
              Zuständige Rechtsanwaltskammer: Rechtsanwaltskammer Hamm<br />
              Ostenallee 18, 59063 Hamm<br />
              <a href="https://www.rak-hamm.de" target="_blank" rel="noopener noreferrer">www.rak-hamm.de</a>
            </p>
            <p>
              Die gesetzliche Berufsbezeichnung &bdquo;Rechtsanwalt&ldquo; bzw. &bdquo;Rechtsanwältin&ldquo; wurde in der Bundesrepublik Deutschland verliehen.
            </p>
            <p>
              Berufsrechtliche Regelungen:
            </p>
            <ul>
              <li>Bundesrechtsanwaltsordnung (BRAO)</li>
              <li>Berufsordnung für Rechtsanwälte (BORA)</li>
              <li>Fachanwaltsordnung (FAO)</li>
              <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
            </ul>

            <h3>Notare</h3>
            <p>
              Zuständige Notarkammer: Westfälische Notarkammer Hamm<br />
              Ostenallee 18, 59063 Hamm<br />
              <a href="https://www.westfaelische-notarkammer.de" target="_blank" rel="noopener noreferrer">www.westfaelische-notarkammer.de</a>
            </p>
            <p>
              Aufsichtsbehörde: Präsident des Landgerichts Dortmund
            </p>
            <p>
              Berufsrechtliche Regelungen:
            </p>
            <ul>
              <li>Bundesnotarordnung (BNotO)</li>
              <li>Beurkundungsgesetz (BeurkG)</li>
              <li>Gerichts- und Notarkostengesetz (GNotKG)</li>
            </ul>

            <h2>Berufshaftpflichtversicherung</h2>
            <p>
              Rechtsanwälte sind aufgrund der Bundesrechtsanwaltsordnung verpflichtet, eine Berufshaftpflichtversicherung mit einer Mindestversicherungssumme von 250.000,00 € zu unterhalten. Notare sind verpflichtet, eine Berufshaftpflichtversicherung mit einer Mindestversicherungssumme von 500.000,00 € zu unterhalten.
            </p>
            <p>
              Versicherer: Victoria Versicherungs AG<br />
              Räumlicher Geltungsbereich: Europa
            </p>

            <h2>Außergerichtliche Streitbeilegung</h2>
            <p>
              Bei Streitigkeiten zwischen Rechtsanwälten und ihren Auftraggebern besteht die Möglichkeit der außergerichtlichen Streitbeilegung bei der regionalen Rechtsanwaltskammer Hamm (gemäß § 73 Abs. 2 Nr. 3 i.V.m. § 73 Abs. 5 BRAO) oder bei der Schlichtungsstelle der Rechtsanwaltschaft (§ 191f BRAO) bei der Bundesrechtsanwaltskammer, im Internet zu finden über die Homepage der Bundesrechtsanwaltskammer (<a href="https://www.brak.de" target="_blank" rel="noopener noreferrer">www.brak.de</a>).
            </p>

            <h2>Online-Streitbeilegung</h2>
            <p>
              Plattform der EU zur außergerichtlichen Online-Streitbeilegung: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
