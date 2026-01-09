import React, { useEffect } from "react";

export const AGBPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-secondary min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-16 text-primary">
          Allgemeine Geschäfts&shy;bedingungen
        </h1>

        <div className="space-y-12 text-gray-600 font-light leading-relaxed">
          {/* 1. Geltungsbereich */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              1. Geltungsbereich
            </h2>
            <p className="mb-4">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
              Verträge zwischen der MA Bau GmbH (nachfolgend „Auftragnehmer")
              und ihren Auftraggebern (nachfolgend „Auftraggeber") über die
              Erbringung von Bauleistungen, insbesondere im Bereich
              Photovoltaik-Montage, Trockenbau und allgemeine Handwerksarbeiten.
            </p>
            <p className="mb-4">
              Abweichende, entgegenstehende oder ergänzende Allgemeine
              Geschäftsbedingungen des Auftraggebers werden nicht
              Vertragsbestandteil, es sei denn, der Auftragnehmer hat ihrer
              Geltung ausdrücklich schriftlich zugestimmt.
            </p>
            <p>
              Diese AGB gelten auch für alle zukünftigen Geschäftsbeziehungen,
              auch wenn sie nicht nochmals ausdrücklich vereinbart werden.
            </p>
          </section>

          {/* 2. Vertragsschluss und Angebote */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              2. Vertragsschluss und Angebote
            </h2>
            <p className="mb-4">
              Angebote des Auftragnehmers sind freibleibend und unverbindlich,
              sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.
              Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung des
              Auftragnehmers oder durch Beginn der Ausführung der Leistung
              zustande.
            </p>
            <p className="mb-4">
              Kostenvoranschläge sind unverbindlich, sofern nichts anderes
              vereinbart wurde. Weicht der tatsächliche Aufwand vom
              Kostenvoranschlag ab, wird der Auftraggeber unverzüglich
              informiert.
            </p>
            <p>
              Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der
              schriftlichen Bestätigung durch den Auftragnehmer.
            </p>
          </section>

          {/* 3. Leistungsumfang */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              3. Leistungsumfang
            </h2>
            <p className="mb-4">
              Der Umfang der zu erbringenden Leistungen ergibt sich aus der
              Auftragsbestätigung bzw. dem geschlossenen Vertrag. Nachträgliche
              Änderungen oder Ergänzungen bedürfen der schriftlichen
              Vereinbarung.
            </p>
            <p className="mb-4">
              <strong>Photovoltaik-Montage:</strong> Die Montage von
              Photovoltaikanlagen erfolgt nach den anerkannten Regeln der
              Technik und unter Beachtung aller einschlägigen Normen und
              Vorschriften. Der Auftraggeber stellt sicher, dass die baulichen
              Voraussetzungen (Statik, Dachzustand etc.) gegeben sind.
            </p>
            <p className="mb-4">
              <strong>Trockenbau und Handwerksarbeiten:</strong> Die Ausführung
              erfolgt fachgerecht nach den anerkannten Regeln der Technik. Der
              Auftraggeber stellt die erforderlichen Anschlüsse (Strom, Wasser
              etc.) zur Verfügung.
            </p>
            <p>
              Zusätzliche Leistungen, die nicht im ursprünglichen Auftrag
              enthalten sind, werden gesondert berechnet.
            </p>
          </section>

          {/* 4. Preise und Zahlungsbedingungen */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              4. Preise und Zahlungsbedingungen
            </h2>
            <p className="mb-4">
              Alle Preise verstehen sich in Euro zzgl. der gesetzlichen
              Mehrwertsteuer, sofern nicht anders angegeben. Die Preise gelten
              ab Geschäftssitz des Auftragnehmers. Kosten für Anfahrt,
              Transport, Verpackung und Versicherung werden gesondert berechnet,
              sofern nicht anders vereinbart.
            </p>
            <p className="mb-4">
              <strong>Zahlungsbedingungen:</strong>
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Bei Auftragserteilung: 30% Anzahlung auf die Gesamtsumme</li>
              <li>
                Bei Materialbeschaffung: 40% nach Materialbeschaffung und vor
                Montagebeginn
              </li>
              <li>
                Bei Fertigstellung: 30% nach vollständiger Fertigstellung und
                Abnahme
              </li>
            </ul>
            <p className="mb-4">
              Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne
              Abzug zur Zahlung fällig. Bei Zahlungsverzug werden Verzugszinsen
              in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
            </p>
            <p>
              Der Auftraggeber kann nur mit unbestrittenen oder rechtskräftig
              festgestellten Forderungen aufrechnen. Ein Zurückbehaltungsrecht
              steht dem Auftraggeber nur zu, wenn sein Gegenanspruch auf
              demselben Vertragsverhältnis beruht.
            </p>
          </section>

          {/* 5. Ausführungsfristen und Termine */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              5. Ausführungsfristen und Termine
            </h2>
            <p className="mb-4">
              Vereinbarte Ausführungsfristen und Termine sind nur dann
              verbindlich, wenn sie vom Auftragnehmer ausdrücklich schriftlich
              als verbindlich bestätigt wurden.
            </p>
            <p className="mb-4">
              Die Einhaltung von Fristen setzt voraus, dass der Auftraggeber
              alle erforderlichen Unterlagen, Genehmigungen und Freigaben
              rechtzeitig zur Verfügung stellt und vereinbarte
              Zahlungsbedingungen einhält.
            </p>
            <p className="mb-4">
              Bei Verzögerungen durch höhere Gewalt, Streik, Aussperrung,
              behördliche Maßnahmen, Materialmangel oder sonstige vom
              Auftragnehmer nicht zu vertretende Umstände verlängern sich die
              Fristen angemessen.
            </p>
            <p>
              Schadensersatzansprüche wegen Nichteinhaltung von Fristen sind
              ausgeschlossen, es sei denn, dem Auftragnehmer fällt Vorsatz oder
              grobe Fahrlässigkeit zur Last.
            </p>
          </section>

          {/* 6. Mitwirkungspflichten des Auftraggebers */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              6. Mitwirkungspflichten des Auftraggebers
            </h2>
            <p className="mb-4">
              Der Auftraggeber ist verpflichtet, alle für die Ausführung der
              Arbeiten erforderlichen Informationen, Unterlagen und
              Genehmigungen rechtzeitig zur Verfügung zu stellen.
            </p>
            <p className="mb-4">
              Der Auftraggeber stellt sicher, dass die Baustelle zum
              vereinbarten Zeitpunkt zugänglich und für die Durchführung der
              Arbeiten vorbereitet ist. Dies umfasst insbesondere:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
              <li>Bereitstellung von Strom- und Wasseranschlüssen</li>
              <li>Räumung der Arbeitsbereiche</li>
              <li>Sicherstellung der Statik bei Dach- und Wandarbeiten</li>
              <li>Einholung erforderlicher behördlicher Genehmigungen</li>
            </ul>
            <p>
              Verzögerungen aufgrund nicht erfüllter Mitwirkungspflichten gehen
              zu Lasten des Auftraggebers und können zu Mehrkosten führen.
            </p>
          </section>

          {/* 7. Abnahme */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">7. Abnahme</h2>
            <p className="mb-4">
              Nach Fertigstellung der Arbeiten ist der Auftraggeber
              verpflichtet, die Leistung unverzüglich abzunehmen. Die Abnahme
              kann schriftlich oder durch konkludentes Handeln (z.B.
              Inbetriebnahme der Anlage) erfolgen.
            </p>
            <p className="mb-4">
              Etwaige Mängel sind bei der Abnahme zu rügen. Unwesentliche Mängel
              berechtigen nicht zur Verweigerung der Abnahme.
            </p>
            <p>
              Verweigert der Auftraggeber die Abnahme ohne berechtigten Grund
              oder nimmt er die Leistung nicht innerhalb von 14 Tagen nach
              Aufforderung ab, gilt die Leistung als abgenommen.
            </p>
          </section>

          {/* 8. Gewährleistung */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              8. Gewährleistung
            </h2>
            <p className="mb-4">
              Für Mängel der erbrachten Leistungen haftet der Auftragnehmer nach
              den gesetzlichen Vorschriften des Werkvertragsrechts (§§ 633 ff.
              BGB). Die Gewährleistungsfrist beträgt 2 Jahre ab Abnahme, soweit
              nicht gesetzlich längere Fristen vorgeschrieben sind.
            </p>
            <p className="mb-4">
              <strong>Mängelansprüche:</strong> Der Auftraggeber hat bei Mängeln
              zunächst Anspruch auf Nacherfüllung (Nachbesserung oder
              Neuherstellung). Der Auftragnehmer ist berechtigt, zweimal
              nachzubessern.
            </p>
            <p className="mb-4">
              Schlägt die Nacherfüllung fehl, kann der Auftraggeber nach seiner
              Wahl Minderung verlangen oder vom Vertrag zurücktreten. Bei nur
              unerheblichen Mängeln besteht kein Rücktrittsrecht.
            </p>
            <p className="mb-4">
              <strong>Ausschluss der Gewährleistung:</strong> Die Gewährleistung
              entfällt bei:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
              <li>
                Unsachgemäßer Behandlung oder Nutzung durch den Auftraggeber
              </li>
              <li>Natürlichem Verschleiß</li>
              <li>Änderungen oder Reparaturen durch Dritte ohne Zustimmung</li>
              <li>Nichtbeachtung von Wartungs- und Pflegehinweisen</li>
            </ul>
            <p>
              Für Materialien, die vom Auftraggeber beigestellt wurden, wird
              keine Gewähr übernommen.
            </p>
          </section>

          {/* 9. Haftung */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">9. Haftung</h2>
            <p className="mb-4">
              Der Auftragnehmer haftet unbeschränkt für Schäden aus der
              Verletzung des Lebens, des Körpers oder der Gesundheit, die auf
              einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
            </p>
            <p className="mb-4">
              Für sonstige Schäden haftet der Auftragnehmer nur bei Vorsatz und
              grober Fahrlässigkeit sowie bei der Verletzung wesentlicher
              Vertragspflichten (Kardinalpflichten). Bei der Verletzung
              wesentlicher Vertragspflichten ist die Haftung auf den
              vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
            <p className="mb-4">
              Die Haftung für mittelbare Schäden, Folgeschäden und entgangenen
              Gewinn ist ausgeschlossen, soweit nicht Vorsatz oder grobe
              Fahrlässigkeit vorliegt.
            </p>
            <p>
              Die vorstehenden Haftungsbeschränkungen gelten nicht bei
              arglistigem Verschweigen eines Mangels oder bei Übernahme einer
              Garantie sowie im Falle zwingender gesetzlicher Haftung (z.B.
              Produkthaftungsgesetz).
            </p>
          </section>

          {/* 10. Eigentumsvorbehalt */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              10. Eigentumsvorbehalt
            </h2>
            <p className="mb-4">
              Bis zur vollständigen Bezahlung aller Forderungen aus der
              Geschäftsbeziehung bleiben die gelieferten Materialien und
              eingebauten Komponenten Eigentum des Auftragnehmers.
            </p>
            <p>
              Bei vertragswidrigem Verhalten des Auftraggebers, insbesondere bei
              Zahlungsverzug, ist der Auftragnehmer berechtigt, die unter
              Eigentumsvorbehalt stehenden Gegenstände zurückzunehmen. Die
              Geltendmachung des Eigentumsvorbehalts sowie die Pfändung der
              Vorbehaltsware durch den Auftragnehmer gelten nicht als Rücktritt
              vom Vertrag.
            </p>
          </section>

          {/* 11. Datenschutz */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              11. Datenschutz
            </h2>
            <p className="mb-4">
              Der Auftragnehmer verarbeitet personenbezogene Daten des
              Auftraggebers ausschließlich zur Vertragsabwicklung und gemäß den
              Bestimmungen der Datenschutz-Grundverordnung (DSGVO).
            </p>
            <p>
              Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
              <a href="/datenschutz" className="text-accent hover:underline">
                Datenschutzerklärung
              </a>
              .
            </p>
          </section>

          {/* 12. Geheimhaltung */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              12. Geheimhaltung
            </h2>
            <p className="mb-4">
              Beide Vertragsparteien verpflichten sich, alle im Rahmen der
              Geschäftsbeziehung erlangten vertraulichen Informationen geheim zu
              halten und nur zur Vertragserfüllung zu verwenden.
            </p>
            <p>
              Diese Verpflichtung besteht auch nach Beendigung des
              Vertragsverhältnisses fort.
            </p>
          </section>

          {/* 13. Urheberrecht und Nutzungsrechte */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              13. Urheberrecht und Nutzungsrechte
            </h2>
            <p className="mb-4">
              Alle vom Auftragnehmer erstellten Planungen, Zeichnungen,
              Berechnungen und sonstigen Unterlagen bleiben geistiges Eigentum
              des Auftragnehmers. Sie dürfen ohne ausdrückliche Zustimmung nicht
              an Dritte weitergegeben oder für andere Zwecke verwendet werden.
            </p>
            <p>
              Bei Beauftragung erwirbt der Auftraggeber das Recht zur Nutzung
              der Unterlagen für den vereinbarten Zweck.
            </p>
          </section>

          {/* 14. Abtretungsverbot */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              14. Abtretungsverbot
            </h2>
            <p>
              Die Abtretung von Rechten und Pflichten aus dem Vertrag durch den
              Auftraggeber an Dritte bedarf der vorherigen schriftlichen
              Zustimmung des Auftragnehmers.
            </p>
          </section>

          {/* 15. Schlussbestimmungen */}
          <section>
            <h2 className="text-lg font-bold text-primary mb-4">
              15. Schlussbestimmungen
            </h2>
            <p className="mb-4">
              <strong>Schriftform:</strong> Änderungen und Ergänzungen dieser
              AGB sowie des Vertrages bedürfen der Schriftform. Dies gilt auch
              für die Abbedingung des Schriftformerfordernisses.
            </p>
            <p className="mb-4">
              <strong>Salvatorische Klausel:</strong> Sollten einzelne
              Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
              Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame
              Bestimmung ist durch eine wirksame zu ersetzen, die dem
              wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten
              kommt.
            </p>
            <p className="mb-4">
              <strong>Anwendbares Recht:</strong> Es gilt ausschließlich das
              Recht der Bundesrepublik Deutschland unter Ausschluss des
              UN-Kaufrechts (CISG).
            </p>
            <p>
              <strong>Gerichtsstand:</strong> Ist der Auftraggeber Kaufmann,
              juristische Person des öffentlichen Rechts oder
              öffentlich-rechtliches Sondervermögen, ist ausschließlicher
              Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Sitz
              des Auftragnehmers (Dresden). Der Auftragnehmer ist jedoch auch
              berechtigt, am allgemeinen Gerichtsstand des Auftraggebers zu
              klagen.
            </p>
          </section>

          {/* Stand */}
          <section className="pt-8 border-t border-primary/10">
            <p className="text-sm text-gray-400">
              Stand: Januar 2026
              <br />
              MA Bau GmbH, Rubensweg 1, 01217 Dresden
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
