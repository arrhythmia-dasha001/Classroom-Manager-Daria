# Schülerübersicht – UW2 (Responsive Layouts, Flexbox/Grid)

Liste von Schülerkarten als responsives Grid. Öffnen mit Live Server.

## 1.1 Planung

1. Inhalt einer Karte festlegen: Initialen, Name, Klasse, Anwesenheit, Status.
2. HTML: `ul` mit `li`, darin je eine Karte (`article`).
3. Mobile First: erst 1 Spalte fürs Handy, dann Media Queries mit `min-width`.
4. Breakpoints (wie bei Bootstrap):

   | Breite | Spalten |
   |---|---|
   | < 576px | 1 |
   | ≥ 576px | 2 |
   | ≥ 768px | 3 |
   | ≥ 1200px | 4 |

5. CSS auf mehrere Dateien aufteilen.
6. Mit DevTools (Gerätemodus) und Lighthouse testen.

## 1.3 Modulares CSS

- `../tokens.css` – gemeinsame Design-Tokens (seit LF11A UW4)
- `../common.css` – Grundeinstellungen, Header, Footer (für alle Seiten gleich)
- `css/layout.css` – Seitenbereich, Grid und Media Queries
- `css/components.css` – Karte, Badge

Gelöst ist die Aufgabe, wenn das Grid bei 576 / 768 / 1200px auf 2 / 3 / 4 Spalten wechselt, es kein horizontales
Scrollen gibt und Lighthouse mindestens 90 zeigt.

Zusätzlich: `clamp()` für die Überschrift und eine Container Query für die Karte.

## 1.4 Lighthouse (Mobile, 16.11.2026)

| Kategorie | Ergebnis |
|---|---|
| Best Practices | 96 |
| Cumulative Layout Shift | 0 |
| Accessibility | 100 |

---

# LF10A UW4 – Filtern und Sortieren (JavaScript)

Über der Liste: Suche nach Name, Auswahl der Klasse, Sortierung. Die Liste ändert sich sofort, ohne Neuladen.

## 1.1 Planung

1. Daten an jede Karte schreiben: `data-name`, `data-klasse`, `data-anwesenheit`.
2. Form mit Suchfeld und zwei Auswahlfeldern über der Liste (mit `<label>`).
3. Reine Funktionen in `js/filter.js`: `filterStudents()` und `sortStudents()`. Sie arbeiten nur mit Daten, nicht mit dem DOM → testbar.
4. `js/app.js`: Karten einlesen, bei `input`/`change` filtern und sortieren, Karten mit `hidden` aus- und einblenden, mit `append()` neu ordnen.
5. Trefferzahl in einer Live-Region anzeigen (`aria-live="polite"`).
6. `submit` der Form verhindern, damit Enter die Seite nicht neu lädt.

## 1.2 ESLint und Prettier

Die Schülerliste ist ein npm-Workspace wie `frontend` und `backend` (siehe `package.json` im Hauptordner).
Deshalb einmal im **Hauptordner** des Projekts installieren, die Pakete landen im gemeinsamen `node_modules`:

```
npm install
```

Danach im Ordner `schuelerliste`:

```
npm run lint           # ESLint prüft den Code (eslint.config.js)
npm run format         # Prettier formatiert js/ und tests/ (.prettierrc.json)
npm run format:check   # nur prüfen, nichts ändern
```

ESLint findet Fehler (z. B. unbenutzte Variablen, `==` statt `===`), Prettier sorgt für einheitliche Formatierung.

## 1.3 und 1.4 Tests mit Jest

```
npm test               # Tests ausführen
npm run test:coverage  # mit Abdeckung
```

Tests: `tests/filter.test.js` (16 Tests für Filter, Sortierung, Debounce und URL).

| Datei | Statements | Branches | Funktionen |
|---|---|---|---|
| `js/filter.js` | 100 % | 100 % | 100 % |

Gelöst ist die Aufgabe, wenn alle Tests grün sind, die Branch-Coverage mindestens 80 % ist und `npm run lint` keine Fehler zeigt. Liegt die Coverage unter 80 %, schlägt `npm run test:coverage` fehl (`coverageThreshold` in `package.json`).

`js/app.js` (DOM) wird nicht mit Jest getestet, sondern im Browser.

## Fortgeschritten

- Debounce: die Suche filtert erst 300 ms nach dem letzten Tastendruck.
- URL-Query-Sync: Filter stehen in der Adresszeile, z. B. `?klasse=FI24B&sortierung=anwesenheit-asc`. Den Link kann man speichern oder weitergeben.
