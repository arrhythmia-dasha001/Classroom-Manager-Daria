# Heuristik-Report: Intranet-Portal (Urlaubsantrag)

LF11A UW2 – Usability-Heuristiken nach Nielsen

## 1. Die zehn Heuristiken nach Nielsen

| # | Heuristik | Worum geht es? |
|---|---|---|
| 1 | Sichtbarkeit des Systemstatus | Der Nutzer sieht immer, was das System gerade macht. |
| 2 | Übereinstimmung von System und realer Welt | Das System benutzt Wörter, die der Nutzer kennt, keine Fachsprache. |
| 3 | Nutzerkontrolle und Freiheit | Man kann eine Aktion abbrechen oder rückgängig machen. |
| 4 | Konsistenz und Standards | Gleiche Dinge sehen gleich aus und heißen gleich. |
| 5 | Fehlervermeidung | Das System verhindert Fehler, bevor sie passieren. |
| 6 | Wiedererkennen statt Erinnern | Wichtige Infos stehen dort, wo man sie braucht, man muss sich nichts merken. |
| 7 | Flexibilität und Effizienz | Anfänger kommen einfach zum Ziel, Profis schneller (z. B. Shortcuts). |
| 8 | Ästhetisches und minimalistisches Design | Es wird nur gezeigt, was für die Aufgabe wichtig ist. |
| 9 | Fehlerdiagnose und -behebung | Eine Fehlermeldung sagt klar, was falsch ist und wie man es löst. |
| 10 | Hilfe und Dokumentation | Wenn Hilfe nötig ist, ist sie schnell zu finden und passt zur Aufgabe. |

## 2. Gefundene Probleme und 3. Schweregrad

Schweregrad = Häufigkeit × Auswirkung × Persistenz (wie oft, wie schlimm, wie lange es stört).

| # | Problem | Verletzte Heuristik | Schweregrad | Begründung |
|---|---|---|---|---|
| P1 | „Senden“ schickt den Antrag sofort ab, ohne Rückfrage. Rechts steht „Aktionen nicht rückgängig machbar“. | 5 Fehlervermeidung, 3 Nutzerkontrolle | katastrophal | Ein falscher Antrag kann nicht mehr korrigiert werden. Passiert bei jedem Antrag. |
| P2 | Fehlermeldung „Bitte prüfen. Fehler nicht erkannt.“ – man weiß nicht, welches Feld falsch ist. | 9 Fehlerdiagnose | schwer | Der Nutzer kommt nicht weiter und muss raten. |
| P3 | Der Status widerspricht sich: oben „noch nicht gespeichert“, unten „Speichern… 27 % fertig, Fehler: 0“. Nach dem Senden erscheint „Antrag wurde gesendet. Vielleicht.“ | 1 Systemstatus | schwer | Man weiß nicht, ob der Antrag angekommen ist. |
| P4 | Wichtige Regeln („Reiseantrag vor dem Urlaubsantrag einreichen“) stehen nur am Rand und nicht im Formular. | 6 Wiedererkennen statt Erinnern | schwer | Wer den Hinweis übersieht, macht die Schritte in der falschen Reihenfolge. |
| P5 | Der Zeitraum ist ein freies Textfeld („18.08.-22.08.“) ohne Jahr und ohne Kalender. | 5 Fehlervermeidung | schwer | Falsche Datumsformate sind leicht möglich und fallen erst später auf. |
| P6 | Unklar, was „Speichern“ und „Abbrechen“ machen (Entwurf? Daten weg?). | 3 Nutzerkontrolle | gering | Man kann es ausprobieren, aber es macht unsicher. |
| P7 | „Bitte nur mit der alten Form nutzen“ und „Fehler können nach 2 Tagen erscheinen“ sind nicht verständlich. | 2 Sprache der Nutzer | gering | Die Hinweise helfen nicht, sie verwirren nur. |
| P8 | In der Navigation ist „Startseite“ markiert, obwohl man auf „Urlaubsantrag“ ist. | 4 Konsistenz | gering | Man verliert die Orientierung, kommt aber trotzdem zum Ziel. |
| P9 | „Ich habe die Anweisungen gelesen“ – es gibt keinen Link zu den Anweisungen. | 10 Hilfe | gering | Man bestätigt etwas, das man nicht finden kann. |
| P10 | „Speichern“ ist gelb wie eine Warnfarbe. | 4 Konsistenz | kosmetisch | Stört kaum, passt aber nicht zur üblichen Farbbedeutung. |

## 4. Reflexion

**(1) Warum ersetzt ein heuristisches Review keinen Nutzertest?**
Beim Review prüfen wir als „Experten“ nach einer Liste. Echte Nutzer haben aber anderes Vorwissen und machen Fehler,
an die wir nicht denken. Außerdem sehen wir nur mögliche Probleme – ob sie wirklich stören und wie oft, zeigt erst ein
Test mit echten Nutzern.

**(2) Was würden wir zuerst beheben?**
1. **P1 (Senden ohne Rückfrage):** Eine Bestätigung vor dem Senden und eine Möglichkeit zum Zurückziehen verhindern
   falsche Anträge, die man nicht mehr ändern kann.
2. **P2 (unklare Fehlermeldung):** Die Meldung sollte das falsche Feld nennen und sagen, was zu tun ist. Sonst bleibt der
   Nutzer stecken und ruft beim Support an.
