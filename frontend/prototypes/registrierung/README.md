# Registrierung – UW3 (Formulare, Barrierefreiheit)

Registrierungsformular mit Validierung und Fehlermeldungen. Öffnen mit Live Server.

## 1.1 Planung

1. Felder festlegen: Vorname, Nachname, E-Mail, Klasse, Passwort, Passwort wiederholen, Datenschutz.
2. Jedes Feld bekommt ein `<label for="...">`, Hinweise werden mit `aria-describedby` verbunden.
3. Pflichtfelder mit `required`, passende `type` und `autocomplete` (z. B. `email`, `new-password`).
4. Fehleranzeige: Text direkt unter dem Feld + `aria-invalid="true"`.
5. Fehlerübersicht oben als Live-Region (`role="alert"`), mit Links zu den Feldern.
6. Validierung mit JavaScript (`js/validation.js`), ohne JS prüft der Browser selbst.
7. Fokus-Styles festlegen (`css/focus.css`) und mit Tastatur und AXE testen.

## 1.3 Styleguide Fokus-States

Siehe `css/focus.css`:

- alle Links, Buttons, Felder: 3px blaue Linie (`#0a58ca`, Kontrast zu Weiß 6,4 : 1), 2px Abstand
- Felder zusätzlich mit blauem Rahmen
- `:focus-visible`, damit der Rahmen bei Tastatur erscheint, nicht bei jedem Mausklick

Gelöst ist die Aufgabe, wenn man das ganze Formular nur mit der Tastatur ausfüllen und absenden kann, man immer sieht,
wo der Fokus ist, und AXE keine kritischen Fehler zeigt.

## 1.4 Tastaturtest

| Test | Ergebnis |
|---|---|
| Erstes Tab | „Zum Formular springen“ erscheint |
| Tab-Reihenfolge | Skip-Link → Logo → Felder von oben nach unten → Link Datenschutz → Button (passt) |
| Klasse auswählen | mit Pfeiltasten möglich |
| Checkbox | mit Leertaste |
| Absenden mit Enter | funktioniert |
| Leeres Formular absenden | Fokus springt in die Fehlerübersicht |
| Link in der Fehlerübersicht | Fokus springt direkt ins Feld |
| Fehler korrigieren | Fehlermeldung verschwindet beim Verlassen des Feldes |

Auffälligkeiten:

- Der Link „Datenschutzerklärung“ führt noch ins Leere (`#`).
- Nach erfolgreicher Registrierung bleibt der Fokus auf dem Button, die Meldung wird nur vorgelesen (Live-Region).

## AXE DevTools

Datum: TT.MM.2026

| Seite | Kritisch | Ernst | Mittel | Gering |
|---|---|---|---|---|
| `index.html` | … | … | … | … |
| `index.html` nach Absenden (mit Fehlern) | … | … | … | … |
