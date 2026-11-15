# Design-Thinking-Canvas: Classroom-Manager

## UI vs. UX

- **UI (User Interface):** das, was man sieht – Farben, Schrift, Buttons, Layout.
- **UX (User Experience):** wie gut man mit der Anwendung sein Ziel erreicht – schnell, verständlich, ohne Frust.
- **Unterschied:** Eine Seite kann schön aussehen (gutes UI), aber trotzdem schwer zu bedienen sein (schlechtes UX).
- **Beispiel UI im Classroom-Manager:** Die Landing-Page nutzt einheitliche Farben und Abstände über Design-Tokens
  (`--cm-*`), z. B. den blauen Button „Jetzt anmelden“ und drei Karten mit Icons für Klassen, Anwesenheiten und Kursbuch.
- **Beispiel UX im Classroom-Manager:** Über den „Schnellzugriff“ kommt die Lehrkraft von der Startseite mit einem
  Klick zu den Anwesenheiten. Auf dem Handy wird die Navigation zum Burger-Menü, sodass die Seite auch im Unterricht
  gut bedienbar ist.

## 1. Verstehen – Ausgangsproblem an der BBS 2 Leer

Klassen und Anwesenheiten werden heute in einem Heft auf Papier geführt und müssen danach in Excel abgetippt werden
(Medienbruch). Noten-Tendenzen liegen in Excel, oft in verschiedenen Dateien für einzelne Schüler:innen
(Insellösungen). Wenn die Lehrkraft eine Anwesenheit falsch einträgt, ist das auf Papier schwer zu korrigieren.
Excel-Dateien werden doppelt oder mit falschem Dateinamen gespeichert, sodass unklar ist, welche Version aktuell ist.

**Betroffen** sind vor allem die Lehrkräfte, aber auch Schulleitung und Sekretariat, die korrekte Daten brauchen, und
die Schüler:innen, bei denen Fehlzeiten falsch gezählt werden können.

**Folgen:** Zeitverlust durch Doppeleingaben, Fehler beim Abtippen und kein schneller Überblick über die Klasse.

## 2. Sichtweise definieren – Point of View

**Point of View:** Ein Klassenlehrer wie Paul Wagner braucht alle Daten seiner Klassen übersichtlich an einem Ort, weil
er heute zwischen Papierlisten und mehreren Excel-Dateien wechseln muss und dadurch Zeit verliert und Fehler macht.

## 3. Ideen finden – Lösungsansätze im Classroom-Manager

1. **Anwesenheitsmanagement:** Die Lehrkraft erfasst die Anwesenheit direkt im Browser, auch auf dem Tablet im
   Unterricht. → Keine Papierliste und kein Abtippen mehr, der Medienbruch fällt weg.
2. **CSV-Import/-Export:** Alte Excel-Listen werden als CSV importiert, niemand muss sie neu abtippen. Für Berichte
   (z. B. an die Schulleitung) lassen sich die Daten als CSV exportieren. → Keine verstreuten Dateiversionen mehr.
3. **Digitales Kursbuch:** Unterrichtsinhalte werden pro Klasse und Datum im selben System wie die Anwesenheit
   eingetragen. → Keine separate Datei, die Lehrkraft findet alles an einem Ort.
