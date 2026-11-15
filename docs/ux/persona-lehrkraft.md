# Persona: Lehrkraft (Hauptnutzer)

## Steckbrief

- **Name:** Paul Wagner
- **Alter:** 45
- **Rolle:** Klassenlehrer an der BBS 2 Leer, unterrichtet die Lernfelder LF10 und LF11
- **Klassen:** Klassenlehrer der FI24A, unterrichtet zusätzlich die FI24B

**Zitat:** „Ich verbringe mehr Zeit damit, Listen abzutippen und die richtige Excel-Datei zu suchen, als mit meinen
Schülern.“

## Technisches Können

Paul arbeitet sicher mit Excel, MS Teams und Papierlisten. Moodle ist dagegen neu für ihn, und er fühlt sich damit noch
unsicher. Sein Kursbuch führt er lieber auf Papier, weil er so Unterrichtsinhalte und den Fortschritt der Klasse besser
kontrollieren kann. Dafür muss er aber für jede Klasse Unterrichtsmaterial ausdrucken – und manchmal fehlt Papier, der
Drucker ist kaputt oder die Farbe ist leer.

**Erwartung an eine neue Anwendung:** Sie muss ohne lange Einarbeitung funktionieren. Alle Schüler:innen sollen die
Unterrichtsinhalte sicher in digitaler Form haben, und Paul möchte den Lernfortschritt seiner Klassen jederzeit im Blick
behalten.

## Ziele im Schulalltag

1. Die Anwesenheit zu Beginn der Stunde schnell erfassen, ohne Papierliste.
2. Fehlzeiten-Grenzen rechtzeitig erkennen und eine Warnung als Push-Nachricht erhalten.
3. Lernfortschritt und Noten-Tendenzen seiner Schüler:innen im Blick haben.
4. Das Kursbuch digital führen, ohne Material ausdrucken zu müssen.

## Frustpunkte / Pain Points

1. **Insellösungen:** Die Daten liegen in mehreren Excel-Listen, die nicht miteinander verbunden sind.
2. **Medienbruch:** Anwesenheiten werden auf Papier notiert und müssen danach in Excel abgetippt werden.
3. **Unklare Versionen:** Von derselben Excel-Liste gibt es mehrere Kopien (z. B. auf dem USB-Stick, im Teams-Ordner,
   per Mail). Paul weiß oft nicht, welche Datei die aktuelle ist.
4. **Abhängigkeit vom Drucker:** Für das Kursbuch auf Papier muss er ständig drucken – fehlt Papier oder Farbe, ist er
   nicht vorbereitet.

## Bezug zu den Beispieldaten

In `backend/src/data/students.json` stehen Schüler:innen aus Pauls Klassen: **Max Mustermann** und
**Erika Mustermann** gehören zur FI24A, deren Klassenlehrer er ist. Bei ihnen muss er die Anwesenheit erfassen und die
Fehlzeiten im Blick behalten. **John Doe** ist in der FI24B, die Paul zusätzlich in LF10 und LF11 unterrichtet – hier
führt er das Kursbuch und sieht die Noten-Tendenz.
