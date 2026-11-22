// bestandsliste.js – Bestandsliste für den Shop von Frau Lehmann (noch JavaScript)

const VERSAND = 1; // Versandkosten pro Produkt in €

const products = [
  { id: 7, name: "Tasse", price: "19", category: "tasse" },
  { id: 8, name: "Teller flach", price: 14.5, category: "teller" },
  { id: 9, name: "Vase blau", price: 34.9, category: "vase" },
];

function priceWithShipping(product) {
  return product.price + VERSAND;
}

function findByCategory(list, category) {
  return list.filter((product) => product.category === category);
}

function updateProduct(product, changes) {
  return { ...product, ...changes };
}

for (const product of products) {
  console.log(`${product.name}: ${priceWithShipping(product)} €`);
}
console.log("Teller:", findByCategory(products, "teller").length);
console.log(updateProduct(products[1], { price: 12.9 }));
