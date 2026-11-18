// products.js – Produktdaten des Schulshops und kleine Hilfsfunktionen.
// Kein Backend: Die Daten stehen direkt hier. Später kämen sie per fetch() von der API.

export const products = [
  {
    id: 1,
    name: "Collegeblock A4, kariert",
    category: "Papier",
    price: 2.49,
    icon: "📒",
    description: "80 Blatt, gelocht, mit Rand. Passt in jeden Ordner.",
  },
  {
    id: 2,
    name: "Kugelschreiber, 3 Stück",
    category: "Schreiben",
    price: 1.99,
    icon: "🖊️",
    description: "Blaue Mine, mittlere Strichstärke, mit Clip.",
  },
  {
    id: 3,
    name: "Textmarker-Set",
    category: "Schreiben",
    price: 3.99,
    icon: "🖍️",
    description: "4 Farben: Gelb, Grün, Pink und Orange. Trocknet schnell.",
  },
  {
    id: 4,
    name: "Ordner A4, breit",
    category: "Ordnen",
    price: 2.79,
    icon: "📁",
    description: "8 cm Rückenbreite, mit Rückenschild zum Beschriften.",
  },
  {
    id: 5,
    name: "USB-Stick 32 GB",
    category: "Technik",
    price: 7.99,
    icon: "💾",
    description: "USB 3.0, klein und mit Öse für den Schlüsselbund.",
  },
  {
    id: 6,
    name: "Taschenrechner",
    category: "Technik",
    price: 14.9,
    icon: "🧮",
    description: "Wissenschaftlicher Rechner mit Bruchrechnung, für Prüfungen zugelassen.",
  },
  {
    id: 7,
    name: "Geodreieck 16 cm",
    category: "Zeichnen",
    price: 1.49,
    icon: "📐",
    description: "Bruchsicher, mit Griff und mm-Einteilung.",
  },
  {
    id: 8,
    name: "Haftnotizen, 5 Blöcke",
    category: "Papier",
    price: 2.99,
    icon: "🗒️",
    description: "76 × 76 mm, je 100 Blatt, lösen sich ohne Reste.",
  },
];

// Preis im deutschen Format: 2.49 → "2,49 €"
// Intl.NumberFormat kennt Komma, Tausenderpunkt und Währungszeichen für jede Sprache.
const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

export function formatPrice(price) {
  return euro.format(price);
}

// Ein Produkt über seine id finden (für das Detail-Modal)
export function findProduct(id) {
  return products.find((product) => product.id === id);
}
