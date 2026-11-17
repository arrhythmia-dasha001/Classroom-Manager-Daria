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
