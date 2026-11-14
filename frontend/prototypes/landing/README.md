# Landing-Page – UW1-Prototyp

Statische Landing-Page für den Classroom-Manager der BBS 2 Leer, umgesetzt mit reinem HTML5 und CSS
nach dem Wireframe [`docs/wireframes/uw1-landingpage.jpg`](../../../docs/wireframes/uw1-landingpage.jpg).

## Starten

`index.html` mit der VS-Code-Erweiterung **Live Server** öffnen (Rechtsklick → „Open with Live Server“).
`npm run dev` ist dafür nicht nötig – der Prototyp liegt bewusst außerhalb von `src/` und gehört nicht zum React-Build.

## Umsetzung

| Anforderung | Umsetzung |
|---|---|
| Semantisches HTML5 | `<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`, `<footer>` |
| Responsives Grid | Mobile First, Karten: 1 Spalte → 2 Spalten ab **768px** → 3 Spalten ab **992px** |
| Navigation | ab 992px als Zeile, darunter Burger-Menü (Checkbox-Trick, ohne JavaScript) |
| Eigenes Stylesheet | alle Styles in `styles.css`, keine Inline-Styles |
| Design-Tokens (Bonus) | Farben, Abstände, Radius als CSS Custom Properties `--cm-*` in `:root` |
| BEM (Bonus) | Klassen nach `block__element--modifier`, z. B. `card__title`, `button--primary` |
| Barrierefreiheit | `lang="de"`, sichtbarer Tastatur-Fokus, `aria-label` für Navigation, Screenreader-Text für den Burger-Button |

## Lighthouse

Seite über Live Server öffnen (`http://127.0.0.1:5500/...`, nicht `file://`) → F12 → Tab **Lighthouse** → *Analyze page load*.

Messung vom 14.11.2026:

| Kategorie | Mobile | Desktop | Ziel |
|---|---|---|---|
| Best Practices | **96** ✅ | **96** ✅ | ≥ 90 |
| Accessibility | **100** ✅ | **100** | ≥ 90 |

Hinweis Desktop-Accessibility: *„Form elements do not have associated labels“* – auf dem Desktop ist der
Burger-Button (`<label>`) ausgeblendet, die unsichtbare Checkbox aber noch vorhanden und damit ohne Beschriftung.
