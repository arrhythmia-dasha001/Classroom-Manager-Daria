// app.js – verbindet die Filter-Form mit der Liste auf der Seite.
// Die eigentliche Logik (filtern, sortieren) steht in filter.js.
import { filterStudents, sortStudents } from "./filter.js";

const form = document.getElementById("filter");
const searchInput = document.getElementById("suche");
const klasseSelect = document.getElementById("klasse");
const sortSelect = document.getElementById("sortierung");
const result = document.getElementById("ergebnis");
const list = document.querySelector(".student-grid");

// 1. Daten einmal aus den Karten lesen (data-Attribute im HTML)
const students = [...list.querySelectorAll(".student-grid__item")].map((item) => ({
  name: item.dataset.name,
  klasse: item.dataset.klasse,
  anwesenheit: Number(item.dataset.anwesenheit),
  element: item, // die Karte selbst, damit wir sie später ein-/ausblenden können
}));

// 2. Liste neu anzeigen: filtern → sortieren → Karten zeigen/verstecken und neu ordnen
function update() {
  const filtered = filterStudents(students, {
    search: searchInput.value,
    klasse: klasseSelect.value,
  });
  const sorted = sortStudents(filtered, sortSelect.value);

  for (const student of students) {
    student.element.hidden = true; // erst alle verstecken
  }
  for (const student of sorted) {
    student.element.hidden = false; // dann die Treffer zeigen
    list.append(student.element); // append verschiebt die Karte ans Ende → neue Reihenfolge
  }

  result.textContent =
    sorted.length === 0
      ? "Keine Schüler:innen gefunden."
      : `${sorted.length} von ${students.length} Schüler:innen`;
}

// 3. Bei jeder Änderung neu anzeigen – ohne Neuladen der Seite
searchInput.addEventListener("input", update);
klasseSelect.addEventListener("change", update);
sortSelect.addEventListener("change", update);

// Enter im Suchfeld würde die Form abschicken und die Seite neu laden → verhindern
form.addEventListener("submit", (event) => event.preventDefault());

update();
