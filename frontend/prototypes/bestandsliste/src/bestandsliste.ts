// bestandsliste.ts – Bestandsliste für den Shop von Frau Lehmann (TypeScript)
// Prüfen: npm run check   ·   Bauen + starten: npm run build && npm start

// Union-Typ: nur genau diese drei Werte sind erlaubt
type Category = "tasse" | "teller" | "vase";

// Vertrag: So muss jedes Produkt aussehen
interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

const VERSAND = 1; // Versandkosten pro Produkt in €

// Array<Product> = Liste, in der nur Product-Objekte stehen dürfen (generischer Typ)
const products: Array<Product> = [
  { id: 7, name: "Tasse", price: 19, category: "tasse" }, // vorher "19" (Text) → 191 €
  { id: 8, name: "Teller flach", price: 14.5, category: "teller" },
  { id: 9, name: "Vase blau", price: 34.9, category: "vase" },
];

function priceWithShipping(product: Product): number {
  return product.price + VERSAND;
}

function findByCategory(list: Product[], category: Category): Product[] {
  return list.filter((product) => product.category === category);
}

// Partial<Product>: alle Eigenschaften optional → man kann nur den Preis ändern
function updateProduct(product: Product, changes: Partial<Product>): Product {
  return { ...product, ...changes };
}

for (const product of products) {
  console.log(`${product.name}: ${priceWithShipping(product)} €`);
}
console.log("Teller:", findByCategory(products, "teller").length);
console.log(updateProduct(products[1], { price: 12.9 }));
