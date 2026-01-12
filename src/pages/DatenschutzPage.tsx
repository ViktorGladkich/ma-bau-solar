import React, { useEffect } from "react";
import { SEO } from "../components/SEO";

export const DatenschutzPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Datenschutzerklärung"
        description="Datenschutzerklärung der MA Bau GmbH - Informationen zur Datenverarbeitung, Cookies, Hosting und Ihren Rechten gemäß DSGVO."
        url="https://mabaugmbh.de/datenschutz"
        type="website"
      />
      <div className="bg-secondary min-h-screen pt-32 pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-16 text-primary">
            Datenschutz&shy;erklärung
          </h1>

          <div className="space-y-12 text-gray-600 font-light leading-relaxed">
            {/* 1. Datenschutz auf einen Blick */}
            <section>
              <h2 className="text-lg font-bold text-primary mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-bold mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="font-bold mb-2">
                Datenerfassung auf dieser Website
              </h3>
              <p className="mb-2">
                <strong>
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </strong>
              </p>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur Verantwortlichen Stelle" in dieser
                Datenschutzerklärung entnehmen.
              </p>

              <p className="mb-2">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben. Andere Daten werden automatisch
                oder nach Ihrer Einwilligung beim Besuch der Website durch
                unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                sobald Sie diese Website betreten.
              </p>

              <p className="mb-2">
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="mb-2">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            {/* 2. Hosting */}
            <section>
              <h2 className="text-lg font-bold text-primary mb-4">
                2. Hosting
              </h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="font-bold mb-2">Cloudflare Pages</h3>
              <p className="mb-4">
                Diese Website wird bei Cloudflare, Inc. gehostet. Cloudflare ist
                ein Unternehmen mit Sitz in den USA: 101 Townsend St, San
                Francisco, CA 94107, USA. Cloudflare ist unter dem EU-US Data
                Privacy Framework zertifiziert.
              </p>
              <p className="mb-4">
                Bei jedem Zugriff auf unsere Website werden automatisch
                Informationen erfasst, die Ihr Browser übermittelt. Diese
                sogenannten Server-Logfiles können beinhalten: Browsertyp und
                -version, verwendetes Betriebssystem, Referrer URL, Hostname des
                zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
              </p>
              <p className="mb-4">
                Diese Daten werden zur Gewährleistung der Sicherheit und
                Funktionsfähigkeit der Website verarbeitet. Die Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
              <p className="mb-4">
                Weitere Informationen finden Sie in der Datenschutzerklärung von
                Cloudflare:{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://www.cloudflare.com/privacypolicy/
                </a>
              </p>

              <h3 className="font-bold mb-2 mt-6">
                Webanalyse durch Cloudflare
              </h3>
              <p className="mb-4">
                Auf dieser Website nutzen wir das Webanalyse-Tool „Cloudflare
                Web Analytics" des Anbieters Cloudflare, Inc. (101 Townsend St.,
                San Francisco, CA 94107, USA).
              </p>
              <p className="mb-4">
                Datenschutz ist uns wichtig: Cloudflare Web Analytics verwendet
                <strong> keine Cookies</strong> und speichert keine
                personenbezogenen Daten. Es werden auch keine individuellen
                Nutzerprofile erstellt („Fingerprinting"). Die Analyse erfolgt
                ausschließlich anhand aggregierter Daten, die keine Rückschlüsse
                auf einzelne Personen zulassen.
              </p>
              <p className="mb-4">
                Die Verarbeitung dient dem Zweck, die Nutzung unserer Website
                statistisch auszuwerten und technisch zu optimieren (z.B.
                Ladezeiten messen). Dies erfolgt auf Grundlage unseres
                berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
            <section>
              <h2 className="text-lg font-bold text-primary mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="font-bold mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können. Die
                vorliegende Datenschutzerklärung erläutert, welche Daten wir
                erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                welchem Zweck das geschieht.
              </p>

              <h3 className="font-bold mb-2">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p className="mb-4">
                MA Bau GmbH
                <br />
                Rubensweg 1
                <br />
                01217 Dresden
                <br />
                <br />
                Telefon: +49 176 32187740
                <br />
                E-Mail: info@ma-bau-gmbh.de
              </p>
              <p className="mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z.B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="font-bold mb-2">Speicherdauer</h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben.
              </p>

              <h3 className="font-bold mb-2">
                Allgemeine Hinweise zu den Rechtsgrundlagen der
                Datenverarbeitung
              </h3>
              <p className="mb-4">
                Sofern Sie in die Datenverarbeitung eingewilligt haben,
                verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO. Bei
                der Verarbeitung zur Erfüllung eines Vertrags oder
                vorvertraglicher Maßnahmen erfolgt diese auf Grundlage von Art.
                6 Abs. 1 lit. b DSGVO.
              </p>

              <h3 className="font-bold mb-2">Widerruf Ihrer Einwilligung</h3>
              <p className="mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>

              <h3 className="font-bold mb-2">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="font-bold mb-2">Recht auf Datenübertragbarkeit</h3>
              <p className="mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="font-bold mb-2">
                Auskunft, Berichtigung und Löschung
              </h3>
              <p className="mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten.
              </p>

              <h3 className="font-bold mb-2">
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit an uns wenden.
              </p>
            </section>

            {/* 4. Datenerfassung auf dieser Website */}
            <section>
              <h2 className="text-lg font-bold text-primary mb-4">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-bold mb-2">Cookies und Tracking</h3>
              <p className="mb-4">
                Diese Website verwendet <strong>keine Cookies</strong> und{" "}
                <strong>keine Tracking-Technologien</strong>. Es werden keine
                Daten in Ihrem Browser gespeichert und keine Analyse-Tools wie
                Google Analytics eingesetzt.
              </p>

              <h3 className="font-bold mb-2">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p className="mb-4">
                <strong>Verwendung von Web3Forms:</strong> Unser Kontaktformular
                nutzt den Dienst Web3Forms (Anbieter: Web3Forms, USA) zur
                Übermittlung Ihrer Nachrichten. Dabei werden Ihre eingegebenen
                Daten (Name, E-Mail, Nachricht) über eine sichere Verbindung an
                Web3Forms übermittelt und anschließend an unsere E-Mail-Adresse
                weitergeleitet. Web3Forms speichert keine personenbezogenen
                Daten dauerhaft. Weitere Informationen finden Sie in der
                Datenschutzerklärung von Web3Forms:{" "}
                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://web3forms.com/privacy
                </a>
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO).
              </p>
              <p className="mb-4">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung
                Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="font-bold mb-2">
                Anfrage per E-Mail oder Telefon
              </h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
                Anfrage inklusive aller daraus hervorgehenden personenbezogenen
                Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
                bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht
                ohne Ihre Einwilligung weiter.
              </p>
            </section>

            {/* 5. Plugins und Tools */}
            <section>
              <h2 className="text-lg font-bold text-primary mb-4">
                5. Plugins und Tools
              </h2>

              <h3 className="font-bold mb-2">Google Fonts (lokales Hosting)</h3>
              <p className="mb-4">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                so genannte Google Fonts, die von Google bereitgestellt werden.
                Die Google Fonts sind lokal installiert. Eine Verbindung zu
                Servern von Google findet dabei nicht statt.
              </p>
              <p className="mb-6">
                Weitere Informationen zu Google Fonts finden Sie unter{" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://developers.google.com/fonts/faq
                </a>{" "}
                und in der Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>

              <h3 className="font-bold mb-2">Google Search Console</h3>
              <p className="mb-4">
                Wir nutzen die Google Search Console, ein Dienst der Google
                Ireland Limited („Google"), Gordon House, Barrow Street, Dublin
                4, Irland, zur Überwachung und Optimierung der Auffindbarkeit
                unserer Website in der Google-Suche.
              </p>
              <p className="mb-4">
                Die Google Search Console erfasst technische Daten über die
                Darstellung unserer Website in den Google-Suchergebnissen, wie
                z.B.:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>
                  Suchanfragen, über die Nutzer auf unsere Website gelangen
                </li>
                <li>Klickraten und Impressionen in den Suchergebnissen</li>
                <li>Technische Fehler und Crawling-Statistiken</li>
                <li>Indexierungsstatus unserer Seiten</li>
              </ul>
              <p className="mb-4">
                Diese Daten werden ausschließlich in aggregierter Form
                bereitgestellt und ermöglichen keine Rückschlüsse auf einzelne
                Nutzer. Die Verarbeitung erfolgt auf Grundlage unseres
                berechtigten Interesses an der Suchmaschinenoptimierung und
                technischen Verbesserung unserer Website gemäß Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
              <p className="mb-4">
                Google ist unter dem EU-US Data Privacy Framework zertifiziert.
                Weitere Informationen finden Sie in der Datenschutzerklärung von
                Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </section>

            {/* 6. KI-Chatbot */}
            <section>
              <h2 className="text-lg font-bold text-primary mb-4">
                6. KI-Chatbot
              </h2>
              <p className="mb-4">
                Auf unserer Website setzen wir einen KI-gestützten Chatbot ein,
                um Ihnen eine schnelle und effiziente Kommunikation zu
                ermöglichen. Der Chatbot nutzt Google Gemini AI zur Verarbeitung
                Ihrer Anfragen.
              </p>
              <h3 className="font-bold mb-2">Welche Daten werden erfasst?</h3>
              <p className="mb-4">
                Bei der Nutzung des Chatbots werden folgende Daten erfasst:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Ihre eingegebenen Nachrichten und Fragen</li>
                <li>
                  Bei Terminbuchungen: Name, E-Mail-Adresse, Unternehmen (falls
                  angegeben), Nachricht, gewählter Termin
                </li>
              </ul>
              <h3 className="font-bold mb-2">Rechtsgrundlage</h3>
              <p className="mb-4">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an effizienter Kundenkommunikation).
              </p>
              <h3 className="font-bold mb-2">Datenübermittlung</h3>
              <p>
                Die Chat-Nachrichten werden zur Verarbeitung an Google (Gemini
                AI) übermittelt. Google verarbeitet diese Daten gemäß ihrer
                Datenschutzbestimmungen:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </section>

            {/* Quellenangabe */}
            <section className="pt-8 border-t border-primary/10">
              <p className="text-sm text-gray-400">
                Quelle: Teile dieser Datenschutzerklärung wurden mit Hilfe von{" "}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  e-recht24.de
                </a>{" "}
                erstellt und an unsere spezifischen Dienste angepasst.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
