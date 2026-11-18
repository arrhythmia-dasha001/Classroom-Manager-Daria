// app.js – baut die Produktliste aus den Daten in products.js.
import { products, formatPrice } from "./products.js";

const list = document.getElementById("produkte");

// Eine Karte für ein Produkt erzeugen.
// createElement + textContent statt innerHTML: Texte werden nie als HTML ausgeführt (Schutz vor XSS).
function createCard(product) {
  const item = document.createElement("li");
  item.className = "product-grid__item";

  const card = document.createElement("article");
  card.className = "product";

  const icon = document.createElement("span");
  icon.className = "product__icon";
  icon.setAttribute("aria-hidden", "true"); // Deko, der Name steht ja daneben
  icon.textContent = product.icon;

  const category = document.createElement("p");
  category.className = "product__category";
  category.textContent = product.category;

  const name = document.createElement("h2");
  name.className = "product__name";
  name.textContent = product.name;

  const price = document.createElement("p");
  price.className = "product__price";
  price.textContent = formatPrice(product.price);

  card.append(icon, category, name, price);
  item.append(card);
  return item;
}

// Alle Karten auf einmal einfügen
list.append(...products.map(createCard));
