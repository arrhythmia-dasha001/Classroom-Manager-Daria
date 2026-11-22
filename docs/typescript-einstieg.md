# TypeScript-Einstieg: Bestandsliste

LF10a UW8

Code: `frontend/prototypes/bestandsliste/` (`npm run check`, `npm run build`, `npm start`)

## 1.1 Fehler im JavaScript

a) `price` ist der Text `'19'`. Bei `+` mit einem Text hängt JavaScript die Zahl einfach hinten an, statt zu rechnen: `'19' + 1` ergibt `'191'`.

b) Erst beim Ausführen, und eigentlich gar nicht: Es gibt keine Fehlermeldung, nur einen falschen Preis, den jemand im Shop bemerken muss.

c) Mit einem Typsystem steht fest, dass `price` eine Zahl (`number`) ist. Wer `'19'` einträgt, bekommt schon im Editor bzw. bei `tsc` einen Fehler, bevor das Programm läuft.

## 1.2 Typen planen

| Eigenschaft | Beispielwert | TypeScript-Typ |
|---|---|---|
| id | 7 | number |
| name | Tasse | string |
| price | 14.5 | number |
| category | tasse oder teller oder vase | `'tasse' \| 'teller' \| 'vase'` |

```ts
type Category = "tasse" | "teller" | "vase";

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}
```

## 1.3 Bestandsliste migrieren

- `tsconfig.json` mit `strict: true` angelegt, `bestandsliste.js` in `bestandsliste.ts` umbenannt.
- Erster `tsc`-Lauf: 6 × „Parameter … implicitly has an 'any' type“, weil die Funktionsparameter keine Typen hatten.
- Nach dem Typisieren kam noch: „Type 'string' is not assignable to type 'number'“ bei der Tasse – genau der Fehler mit 191 €. Korrigiert auf `price: 19`.
- Generische Typen: `Array<Product>` für die Liste und `Partial<Product>` in `updateProduct()`, damit man nur einzelne Eigenschaften ändern kann.
- Jetzt: `tsc` ohne Fehler, Ausgabe „Tasse: 20 €“.

## 1.4 Typfehler beheben

Ich hatte keinen Partner zum Tauschen. Deshalb habe ich selbst eine Variante mit Fehlern gebaut (`uebung/bestandsliste-fehler.ts`) und mit `npm run check:fehler` geprüft:

| Fehlermeldung (Kurzfassung) | Ursache | Korrektur |
|---|---|---|
| Type 'string' is not assignable to type 'number' | Preis als Text `"19"` | `price: 19` |
| Type '"schale"' is not assignable to type 'Category' | Kategorie gibt es nicht | `"tasse"`, `"teller"` oder `"vase"` nehmen oder den Typ erweitern |
| Property 'nmae' does not exist on type 'Product' | Tippfehler | `name` |
| Expected 2 arguments, but got 1 | Kategorie fehlt beim Aufruf | `findByCategory(products, "teller")` |

## 1.5 Fazit

a) Der Browser versteht nur JavaScript. TypeScript muss erst mit `tsc` übersetzt werden, dabei werden die Typen einfach entfernt.

b) Vorteil von `strict: true`: Es findet viel mehr Fehler, z. B. fehlende Typen oder mögliche `null`-Werte. Nachteil: Am Anfang gibt es viele Fehlermeldungen, und alten Code umzustellen dauert länger.
