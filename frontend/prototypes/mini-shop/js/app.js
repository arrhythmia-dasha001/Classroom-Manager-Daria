// app.js – baut die Produktliste aus den Daten in products.js
// und öffnet beim Klick auf „Details“ das Modal.
import { products, formatPrice, findProduct } from "./products.js";

const list = document.getElementById("produkte");
const dialog = document.getElementById("produkt-dialog");
const closeButton = document.getElementById("dialog-schliessen");

// ---------- 1. Produktliste ----------

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

  // 8× „Details“ wäre für Screenreader nicht eindeutig → Produktname unsichtbar dazu
  const details = document.createElement("button");
  details.className = "button button--outline product__details";
  details.type = "button";
  details.dataset.id = product.id; // ergibt data-id="3" im HTML
  details.textContent = "Details";
  const hidden = document.createElement("span");
  hidden.className = "visually-hidden";
  hidden.textContent = ` zu ${product.name}`;
  details.append(hidden);

  card.append(icon, category, name, price, details);
  item.append(card);
  return item;
}

list.append(...products.map(createCard));

// ---------- 2. Detail-Modal ----------

let lastOpener = null; // welcher Button hat das Modal geöffnet?

function openDialog(product, opener) {
  document.getElementById("dialog-icon").textContent = product.icon;
  document.getElementById("dialog-kategorie").textContent = product.category;
  document.getElementById("dialog-titel").textContent = product.name;
  document.getElementById("dialog-beschreibung").textContent = product.description;
  document.getElementById("dialog-preis").textContent = formatPrice(product.price);

  lastOpener = opener;
  dialog.showModal(); // modal: Hintergrund gesperrt, Esc schließt automatisch
}

// Event Delegation: EIN Listener auf der Liste statt 8 Listener auf den Buttons.
// closest() sucht vom geklickten Element nach oben den Button mit data-id.
list.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (!button) return; // Klick war nicht auf einem Details-Button
  openDialog(findProduct(Number(button.dataset.id)), button);
});

closeButton.addEventListener("click", () => dialog.close());

// Klick neben das Modal: Dann ist das Ziel der <dialog> selbst (der dunkle Hintergrund),
// Klicks auf den Inhalt landen auf .modal__inner oder seinen Kindern.
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

// Egal wie geschlossen wurde (✕, Esc, Klick daneben): Fokus zurück auf den Button,
// damit Tastatur-Nutzer:innen an derselben Stelle weitermachen können.
dialog.addEventListener("close", () => {
  lastOpener?.focus();
});
