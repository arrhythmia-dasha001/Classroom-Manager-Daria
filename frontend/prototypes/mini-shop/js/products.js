// products.js – Produkte vom Server holen und Preise formatieren.
// Die Daten liegen jetzt in db.json, der JSON Server liefert sie als REST-API aus.
// Starten: npm run api (im Ordner mini-shop)

const API_URL = "http://localhost:3001/products";
const TIMEOUT_MS = 5000; // länger als 5 Sekunden warten wir nicht

// Zum Testen von 1.4: index.html?test=404 fragt eine Adresse an, die es nicht gibt
const testMode = new URLSearchParams(location.search).get("test");
const url = testMode === "404" ? "http://localhost:3001/gibt-es-nicht" : API_URL;

// Eigener Fehlertyp, damit app.js den HTTP-Statuscode (404, 500 …) kennt
export class HttpError extends Error {
  constructor(status) {
    super(`HTTP-Fehler ${status}`);
    this.status = status;
  }
}

// GET /products → Array mit allen Produkten (JSON)
// async/await: Der Browser wartet auf die Antwort, ohne dass die Seite einfriert.
export async function fetchProducts() {
  // 1. Anfrage schicken, auf Antwort warten.
  //    AbortController bricht die Anfrage ab, wenn nach TIMEOUT_MS noch nichts da ist.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  let response;
  try {
    response = await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timer); // Antwort (oder Fehler) ist da → Timer nicht mehr nötig
  }

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
