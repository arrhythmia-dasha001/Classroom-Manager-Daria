// filter.js – reine Funktionen zum Filtern und Sortieren.
// Sie kennen keine HTML-Seite, bekommen nur Daten und geben neue Daten zurück.
// Deshalb kann man sie mit Jest testen, ohne Browser.

/**
 * Filtert die Schüler:innen nach Name und Klasse.
 * @param {Array<{name: string, klasse: string, anwesenheit: number}>} students
 * @param {{search: string, klasse: string}} filter  klasse = "alle" → keine Einschränkung
 */
export function filterStudents(students, { search, klasse }) {
  const text = search.trim().toLowerCase();

  return students.filter((student) => {
    const passtName = student.name.toLowerCase().includes(text);
    const passtKlasse = klasse === "alle" || student.klasse === klasse;
    return passtName && passtKlasse;
  });
}

/**
 * Sortiert die Schüler:innen. Das Original-Array bleibt unverändert.
 * @param {string} sortBy  "name-asc" | "name-desc" | "anwesenheit-desc" | "anwesenheit-asc"
 */
export function sortStudents(students, sortBy) {
  const copy = [...students]; // Kopie, weil sort() sonst das Original ändert

  switch (sortBy) {
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name, "de"));
    case "name-desc":
      return copy.sort((a, b) => b.name.localeCompare(a.name, "de"));
    case "anwesenheit-desc":
      return copy.sort((a, b) => b.anwesenheit - a.anwesenheit);
    case "anwesenheit-asc":
      return copy.sort((a, b) => a.anwesenheit - b.anwesenheit);
    default:
      return copy; // unbekannte Sortierung → Reihenfolge bleibt
  }
}

/**
 * Debounce (Fortgeschritten): fn erst ausführen, wenn `delay` ms lang nichts mehr passiert ist.
 * Beim Tippen wird so nicht nach jedem Buchstaben gefiltert, sondern erst nach einer kurzen Pause.
 */
export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer); // alten Auftrag abbrechen
    timer = setTimeout(() => fn(...args), delay); // neuen Auftrag starten
  };
}

/**
 * URL-Query-Sync (Fortgeschritten): Filter → "?suche=lena&klasse=FI24A".
 * Standardwerte werden weggelassen, damit die Adresse kurz bleibt.
 */
export function filterToQuery({ search, klasse, sortBy }) {
  const params = new URLSearchParams();
  if (search.trim() !== "") params.set("suche", search.trim());
  if (klasse !== "alle") params.set("klasse", klasse);
  if (sortBy !== "name-asc") params.set("sortierung", sortBy);
  const query = params.toString();
  return query === "" ? "" : `?${query}`;
}

/** Umgekehrt: "?suche=lena" → { search: "lena", klasse: "alle", sortBy: "name-asc" } */
export function queryToFilter(query) {
  const params = new URLSearchParams(query);
  return {
    search: params.get("suche") ?? "",
    klasse: params.get("klasse") ?? "alle",
    sortBy: params.get("sortierung") ?? "name-asc",
  };
}
