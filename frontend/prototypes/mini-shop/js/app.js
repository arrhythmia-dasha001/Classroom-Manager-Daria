// app.js – lädt die Produkte vom Server, baut die Liste,
// öffnet beim Klick auf „Details“ das Modal und zählt den Warenkorb.
import { fetchProducts, formatPrice, HttpError } from "./products.js";

const list = document.getElementById("produkte");
const dialog = document.getElementById("produkt-dialog");
const closeButton = document.getElementById("dialog-schliessen");
const addButton = document.getElementById("dialog-warenkorb");
const status = document.getElementById("dialog-status");
const cartCount = document.getElementById("warenkorb-anzahl");
const errorBox = document.getElementById("fehler");
const retryButton = document.getElementById("erneut");
const loadStatus = document.getElementById("lade-status");

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

let products = []; // wird gefüllt, sobald die Antwort vom Server da ist

// Verständlicher Text für jeden Fehlerfall – keine technischen Meldungen für Nutzer:innen
function errorText(error) {
  if (error instanceof HttpError && error.status === 404) {
    return "Die Produktliste wurde nicht gefunden (Fehler 404).";
  }
  if (error instanceof HttpError && error.status >= 500) {
    return `Der Server hat gerade ein Problem (Fehler ${error.status}). Bitte versuche es gleich noch einmal.`;
  }
  if (error instanceof HttpError) {
    return `Die Anfrage hat nicht geklappt (Fehler ${error.status}).`;
  }
  // kein HttpError → es kam gar keine Antwort (Server aus, kein Netz)
  return "Der Server ist nicht erreichbar. Prüfe die Verbindung und versuche es noch einmal.";
}

// Skeleton: graue Platzhalter-Karten in derselben Größe wie die echten.
// So sieht man, dass etwas lädt, und die Seite springt nicht, wenn die Daten kommen.
function createSkeletonCard() {
  const item = document.createElement("li");
  item.className = "product-grid__item";
  item.setAttribute("aria-hidden", "true"); // nur Optik, der Screenreader bekommt loadStatus
  const card = document.createElement("div");
  card.className = "product product--skeleton";
  for (const part of ["icon", "category", "name", "price", "button"]) {
    const block = document.createElement("span");
    block.className = `skeleton skeleton--${part}`;
    card.append(block);
  }
  item.append(card);
  return item;
}

function showSkeleton() {
  const placeholders = Array.from({ length: 8 }, createSkeletonCard);
  list.replaceChildren(...placeholders);
  list.setAttribute("aria-busy", "true"); // Liste wird gerade gefüllt
  loadStatus.textContent = "Produkte werden geladen …";
}

async function loadProducts() {
  errorBox.hidden = true;
  showSkeleton();
  try {
    products = await fetchProducts();
    list.replaceChildren(...products.map(createCard));
    loadStatus.textContent = `${products.length} Produkte geladen.`;
  } catch (error) {
    loadStatus.textContent = "";
    // Statt einer leeren Seite: Meldung + Button zum erneuten Laden
    list.replaceChildren();
    errorBox.querySelector(".notice__text").textContent = errorText(error);
    errorBox.hidden = false;
  } finally {
    list.setAttribute("aria-busy", "false"); // finally: läuft immer, ob Erfolg oder Fehler
  }
}

retryButton.addEventListener("click", loadProducts);

loadProducts();

// ---------- 2. Detail-Modal ----------

let lastOpener = null; // welcher Button hat das Modal geöffnet?
let currentProduct = null; // welches Produkt wird gerade angezeigt?

function openDialog(product, opener) {
  currentProduct = product;
  status.textContent = ""; // alte Meldung vom letzten Produkt löschen
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
  const product = products.find((item) => item.id === Number(button.dataset.id));
  openDialog(product, button);
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

// ---------- 3. Warenkorb ----------
// Ohne Backend: Die Zahl lebt nur in dieser Variablen. Nach dem Neuladen ist sie wieder 0.
let cartItems = 0;

addButton.addEventListener("click", () => {
  cartItems += 1;
  cartCount.textContent = cartItems;
  status.textContent = `✓ ${currentProduct.name} liegt im Warenkorb.`;
});
