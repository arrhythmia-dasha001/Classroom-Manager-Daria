# Schülerübersicht – UW2-Prototyp (Responsive Layouts, Flexbox/Grid)

Statische Seite mit einer Liste von Schülerkarten als responsives Grid. Sie ist die Vorstufe der späteren
React-Ansicht, die die Daten aus `backend/src/data/students.json` lädt.

## Starten

`index.html` mit der VS-Code-Erweiterung **Live Server** öffnen (Rechtsklick → „Open with Live Server“).

## 1.1 Planung

1. **Inhalt festlegen:** Welche Daten zeigt eine Karte? → Initialen, Name, Klasse, Anwesenheitsquote, Status.
2. **HTML-Struktur:** Liste `ul.student-grid` mit `li`-Elementen, in jedem eine `article.student` (BEM-Klassen).
3. **Mobile First:** Zuerst das Handy-Layout (1 Spalte), dann mit `min-width`-Media-Queries erweitern.
4. **Breakpoints wählen** (wie Bootstrap, das später in React genutzt wird):

   | Breite | Gerät | Spalten |
   |---|---|---|
   | < 576px | Handy | 1 |
   | ≥ 576px | großes Handy | 2 |
   | ≥ 768px | Tablet | 3 (Header in einer Zeile) |
   | ≥ 1200px | Desktop | 4 |

5. **CSS modularisieren:** nach Aufgabe in drei Dateien aufteilen (siehe unten).
6. **Layout-Shift vermeiden:** feste Größen für Avatar und Logo, keine nachladenden Bilder.
7. **Prüfen:** DevTools-Gerätemodus (Strg+Shift+M) für alle Breakpoints, danach Lighthouse.

## 1.3 Modulares CSS

| Datei | Inhalt | Frage |
|---|---|---|
| `css/base.css` | Design-Tokens `--cm-*`, Reset, `.container` | Was braucht jede Seite? |
| `css/layout.css` | Header, Footer, Grid, alle Media Queries | Wo steht was? |
| `css/components.css` | Logo, Button, Schülerkarte, Badge (BEM) | Wie sieht ein Baustein aus? |

Die Dateien werden in dieser Reihenfolge per `<link>` eingebunden – spätere Regeln überschreiben frühere (Kaskade).

**Woran erkenne ich, dass die Aufgabe gelöst ist?**

- Im DevTools-Gerätemodus wechselt das Grid bei 576 / 768 / 1200px auf 2 / 3 / 4 Spalten.
- Auf keiner Breite gibt es horizontales Scrollen.
- Jede Datei hat genau eine Aufgabe; ein Baustein lässt sich ändern, ohne das Layout anzufassen.
- Lighthouse Mobile: Best Practices ≥ 90, Cumulative Layout Shift ≈ 0.

## Bonus (Fortgeschritten)

- **`clamp()`:** Die Überschrift wächst fließend mit der Fensterbreite (`layout.css`, `.page__title`).
- **Container Query:** Ist eine Karte mindestens 20rem breit, stehen Avatar und Text nebeneinander
  (`components.css`, `@container`).

## 1.4 Lighthouse

Seite über Live Server öffnen (`http://127.0.0.1:5500/...`, nicht `file://`) → F12 → Tab **Lighthouse** →
Mode *Navigation*, Device *Mobile* → *Analyze page load*. Den CLS-Wert findest du unter *Performance* → *Metrics*.

Messung vom TT.MM.2026:

| Kategorie | Mobile | Ziel |
|---|---|---|
| Best Practices | **…** | ≥ 90 |
| Cumulative Layout Shift (CLS) | **…** | < 0,1 |
| Accessibility | **…** | ≥ 90 |
