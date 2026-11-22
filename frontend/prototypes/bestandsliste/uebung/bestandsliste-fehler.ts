// bestandsliste-fehler.ts – Übung 1.4: absichtlich eingebaute Fehler
// Prüfen: npm run check:fehler (soll Fehler melden!)

type Category = "tasse" | "teller" | "vase";

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

const products: Product[] = [
  { id: 7, name: "Tasse", price: "19", category: "tasse" }, // Fehler 1
  { id: 8, name: "Schale", price: 9.9, category: "schale" }, // Fehler 2
];

function findByCategory(list: Product[], category: Category): Product[] {
  return list.filter((product) => product.category === category);
}

console.log(products[0].nmae); // Fehler 3
console.log(findByCategory(products)); // Fehler 4
