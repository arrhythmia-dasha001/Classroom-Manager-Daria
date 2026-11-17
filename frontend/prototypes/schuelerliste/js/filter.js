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
