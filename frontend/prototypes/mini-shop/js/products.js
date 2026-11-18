// products.js – Produkte vom Server holen und Preise formatieren.
// Die Daten liegen jetzt in db.json, der JSON Server liefert sie als REST-API aus.
// Starten: npm run api (im Ordner mini-shop)

const API_URL = "http://localhost:3001/products";

// GET /products → Array mit allen Produkten (JSON)
// async/await: Der Browser wartet auf die Antwort, ohne dass die Seite einfriert.
export async function fetchProducts() {
  const response = await fetch(API_URL); // 1. Anfrage schicken, auf Antwort warten
  return response.json(); // 2. Text der Antwort (JSON) in ein JS-Array umwandeln
}

// Preis im deutschen Format: 2.49 → "2,49 €"
const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

export function formatPrice(price) {
  return euro.format(price);
}
