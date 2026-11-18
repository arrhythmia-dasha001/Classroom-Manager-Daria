// products.js – Produkte vom Server holen und Preise formatieren.
// Die Daten liegen jetzt in db.json, der JSON Server liefert sie als REST-API aus.
// Starten: npm run api (im Ordner mini-shop)

const API_URL = "http://localhost:3001/products";
// Zum Testen:
//   index.html?test=404     → Adresse, die es nicht gibt
//   index.html?test=timeout → Timeout 300 ms, der Server braucht aber 800 ms
const testMode = new URLSearchParams(location.search).get("test");
const url = testMode === "404" ? "http://localhost:3001/gibt-es-nicht" : API_URL;
const TIMEOUT_MS = testMode === "timeout" ? 300 : 5000; // länger als 5 Sekunden warten wir nicht

// Eigener Fehlertyp, damit app.js den HTTP-Statuscode (404, 500 …) kennt
export class HttpError extends Error {
  constructor(status) {
    super(`HTTP-Fehler ${status}`);
    this.status = status;
  }
}

// GET /products → Array mit allen Produkten (JSON)
// GET /products?q=papier → nur Produkte, in denen „papier“ vorkommt (Suche vom JSON Server)
// async/await: Der Browser wartet auf die Antwort, ohne dass die Seite einfriert.
// signal: kommt von app.js, damit eine neue Eingabe diese Anfrage abbrechen kann
export async function fetchProducts(search = "", signal) {
  const query = search ? `?q=${encodeURIComponent(search)}` : "";

  // 1. Anfrage schicken, auf Antwort warten. Zwei Gründe zum Abbrechen:
  //    - app.js bricht ab, weil schon neu getippt wurde  → Fehler "AbortError"
  //    - nach TIMEOUT_MS ist noch keine Antwort da       → Fehler "TimeoutError"
  //    AbortSignal.any() bricht ab, sobald EINER der beiden auslöst.
  const timeout = AbortSignal.timeout(TIMEOUT_MS);
  const both = signal ? AbortSignal.any([signal, timeout]) : timeout;
  const response = await fetch(url + query, { signal: both });

  // 2. Wichtig: fetch() wirft bei 404 oder 500 KEINEN Fehler, die Antwort ist ja angekommen.
  //    response.ok ist nur bei Status 200–299 true → sonst selbst einen Fehler werfen.
  if (!response.ok) {
    throw new HttpError(response.status);
  }

  return response.json(); // 3. Text der Antwort (JSON) in ein JS-Array umwandeln
}

// Preis im deutschen Format: 2.49 → "2,49 €"
const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

export function formatPrice(price) {
  return euro.format(price);
}
