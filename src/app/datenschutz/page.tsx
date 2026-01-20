import { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung der Kanzlei Schüttners Hug & Partner mbB, Rechtsanwälte und Notare in Dortmund.',
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        title="Datenschutzerklärung"
        breadcrumb={[{ label: 'Datenschutz', href: '/datenschutz/' }]}
      />

      <section className="section bg-white">
        <div className="container-narrow">
          <div className="prose-content">
            <h2>I. Verantwortlicher</h2>
            <p>
              <strong>Rechtsanwälte Schüttners Hug & Partner mbB</strong><br />
              Kaiserstr. 21-23<br />
              44135 Dortmund<br />
              Deutschland
            </p>
            <p>
              Telefon: 0231 5896940<br />
              E-Mail: kanzlei@schuettners.de<br />
              Website: www.schuettners.de
            </p>

            <h2>II. Datenschutzbeauftragter</h2>
            <p>
              <strong>dostani IT GmbH</strong><br />
              Patrycja Grzybowska<br />
              Westfalendamm 282<br />
              44141 Dortmund<br />
              E-Mail: datenschutz@dostani-it.de
            </p>

            <h2>III. Datenverarbeitung</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt nur soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
            <p>
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f) DSGVO.
            </p>

            <h3>Automatisch erhobene Daten</h3>
            <p>
              Bei jedem Zugriff auf unsere Website werden automatisch folgende Daten erhoben:
            </p>
            <ul>
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Internet-Service-Provider</li>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
            </ul>
            <p>
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Die vorübergehende Speicherung der IP-Adresse und der Browserdaten ist für die Bereitstellung der Website notwendig und dient dem berechtigten Interesse des Verantwortlichen gemäß Art. 6 Abs. 1 lit. f) DSGVO.
            </p>

            <h2>IV. Betroffenenrechte</h2>

            <h3>Recht auf Auskunft</h3>
            <p>
              Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
            </p>

            <h3>Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie können die Einschränkung der Verarbeitung verlangen, wenn die Verarbeitung unrechtmäßig ist oder die Daten für die ursprünglichen Zwecke nicht mehr benötigt werden, aber für rechtliche Ansprüche erforderlich sind.
            </p>

            <h3>Recht auf Löschung</h3>
            <p>
              Sie können die unverzügliche Löschung verlangen, wenn die Daten für die ursprünglichen Zwecke nicht mehr notwendig sind, die Verarbeitung unrechtmäßig ist oder die Einwilligung widerrufen wird.
            </p>

            <h3>Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, personenbezogene Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
            </p>

            <h3>Kein Widerspruchsrecht</h3>
            <p>
              Die Datennutzung erfolgt automatisch und ist für den Betrieb der Website zwingend erforderlich; ein Widerspruchsrecht besteht daher nicht.
            </p>

            <h3>Beschwerderecht</h3>
            <p>
              Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung gegen die DSGVO verstößt.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
