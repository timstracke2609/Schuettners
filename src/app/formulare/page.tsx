import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactBlock from '@/components/ContactBlock'

export const metadata: Metadata = {
  title: 'Formulare',
  description: 'Formulare, Checklisten und Merkblätter der Kanzlei Schüttners Hug & Partner mbB zum Download.',
}

const documents = {
  checklisten: [
    { label: 'CHECKLISTE GMBH-ERRICHTUNG', url: 'https://www.schuettners.de/wp-content/uploads/checkliste_gmbh-errichtung.pdf' },
    { label: 'CHECKLISTE GMBH & CO: KG-ERRICHTUNG', url: 'https://www.schuettners.de/wp-content/uploads/checkliste_gmbh-co-kg-errichtung.pdf' },
    { label: 'CHECKLISTE UG-ERRICHTUNG', url: 'https://www.schuettners.de/wp-content/uploads/checkliste_ug-errichtung.pdf' },
    { label: 'CHECKLISTE ÜBERLASSUNG', url: 'https://www.schuettners.de/wp-content/uploads/checkliste_ueberlassung.pdf' },
  ],
  datenblaetter: [
    { label: 'DATENBLATT ADOPTION', url: 'https://www.schuettners.de/wp-content/uploads/datenblatt_adoption.pdf' },
    { label: 'DATENBLATT EHEVERTRAG', url: 'https://www.schuettners.de/wp-content/uploads/datenblatt_ehevertrag.pdf' },
    { label: 'DATENBLATT KAUFVERTRAG', url: 'https://www.schuettners.de/wp-content/uploads/datenblatt_kaufvertrag.pdf' },
  ],
  merkblaetter: [
    { label: 'MERKBLATT GMBH-LIQUIDATION', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_gmbh-liquidation.pdf' },
    { label: 'MERKBLATT AUFGABEN NOTAR IMMOBILIENKAUF', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_aufgaben-notar-immobilienkauf.pdf' },
    { label: 'MERKBLATT AUFTEILUNG WOHNUNGSEIGENTUM', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_aufteilung-wohnungseigentum.pdf' },
    { label: 'MERKBLATT CHECKLISTE UG GMBH-ERRICHTUNG', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_checkliste-ug-gmbh-errichtung.pdf' },
    { label: 'MERKBLATT EHEVERTRAG', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_ehevertrag.pdf' },
    { label: 'MERKBLATT GRUNDSTÜCKSKAUF', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_grundstueckskauf.pdf' },
    { label: 'MERKBLATT KAPITALHERABSETZUNG', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_kapitalherabsetzung.pdf' },
    { label: 'MERKBLATT KAUF EIGENTUMSWOHNUNG', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_kauf-eigentumswohnung.pdf' },
    { label: 'MERKBLATT MUSTER VORSORGEVOLLMACHT', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_muster-vorsorgevollmacht.pdf' },
    { label: 'MERKBLATT STIFTUNG ALS INSTRUMENT DER VERMÖGENSFOLGE', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_stiftung-als-instrument-der-vermoegensfolge.pdf' },
    { label: 'MERKBLATT VEREINSGRÜNDUNG', url: 'https://www.schuettners.de/wp-content/uploads/merkblatt_vereinsgruendung.pdf' },
  ],
}

function DocumentLink({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all group"
    >
      <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="flex-grow text-primary-800 group-hover:text-primary-900 font-medium">
        {label}
      </span>
      <svg className="w-5 h-5 text-primary-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

export default function FormularePage() {
  return (
    <>
      <PageHero
        title="Formulare"
        subtitle="Checklisten, Datenblätter und Merkblätter zur ersten Orientierung."
        breadcrumb={[{ label: 'Formulare', href: '/formulare/' }]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-primary-700 leading-relaxed">
              Die folgenden Formulare, Checklisten und Merkblätter dienen zur ersten Orientierung und können eine individuelle rechtliche Beratung nicht ersetzen.
            </p>
          </div>

          <div className="space-y-12">
            {/* Checklisten */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                Checklisten
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.checklisten.map((doc) => (
                  <DocumentLink key={doc.url} {...doc} />
                ))}
              </div>
            </div>

            {/* Datenblätter */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                Datenblätter
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.datenblaetter.map((doc) => (
                  <DocumentLink key={doc.url} {...doc} />
                ))}
              </div>
            </div>

            {/* Merkblätter */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                Merkblätter
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.merkblaetter.map((doc) => (
                  <DocumentLink key={doc.url} {...doc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  )
}
