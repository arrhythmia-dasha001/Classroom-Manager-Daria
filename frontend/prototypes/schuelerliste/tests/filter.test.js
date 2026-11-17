// filter.test.js – Unit-Tests für filter.js (Start: npm test)
import { filterStudents, sortStudents } from "../js/filter.js";

// Kleine Testdaten, damit man das Ergebnis im Kopf nachrechnen kann
const students = [
  { name: "Max Mustermann", klasse: "FI24A", anwesenheit: 96 },
  { name: "John Doe", klasse: "FI24B", anwesenheit: 81 },
  { name: "Anna Kowalski", klasse: "FI24B", anwesenheit: 95 },
];

// Hilfsfunktion: nur die Namen vergleichen, das ist im Test besser lesbar
const names = (list) => list.map((student) => student.name);

describe("filterStudents", () => {
  test("ohne Suche und mit allen Klassen kommen alle zurück", () => {
    const result = filterStudents(students, { search: "", klasse: "alle" });
    expect(result).toHaveLength(3);
  });

  test("findet einen Namen, Groß-/Kleinschreibung ist egal", () => {
    const result = filterStudents(students, { search: "anna", klasse: "alle" });
    expect(names(result)).toEqual(["Anna Kowalski"]);
  });

  test("ignoriert Leerzeichen am Anfang und Ende", () => {
    const result = filterStudents(students, { search: "  doe ", klasse: "alle" });
    expect(names(result)).toEqual(["John Doe"]);
  });

  test("filtert nach Klasse", () => {
    const result = filterStudents(students, { search: "", klasse: "FI24B" });
    expect(names(result)).toEqual(["John Doe", "Anna Kowalski"]);
  });

  test("Suche und Klasse zusammen: kein Treffer → leere Liste", () => {
    const result = filterStudents(students, { search: "max", klasse: "FI24B" });
    expect(result).toEqual([]);
  });
});

describe("sortStudents", () => {
  test("Name A–Z", () => {
    expect(names(sortStudents(students, "name-asc"))).toEqual([
      "Anna Kowalski",
      "John Doe",
      "Max Mustermann",
    ]);
  });

  test("Name Z–A", () => {
    expect(names(sortStudents(students, "name-desc"))).toEqual([
      "Max Mustermann",
      "John Doe",
      "Anna Kowalski",
    ]);
  });

  test("Anwesenheit: höchste zuerst", () => {
    expect(names(sortStudents(students, "anwesenheit-desc"))).toEqual([
      "Max Mustermann",
      "Anna Kowalski",
      "John Doe",
    ]);
  });

  test("Anwesenheit: niedrigste zuerst", () => {
    expect(names(sortStudents(students, "anwesenheit-asc"))).toEqual([
      "John Doe",
      "Anna Kowalski",
      "Max Mustermann",
    ]);
  });

  test("unbekannte Sortierung → Reihenfolge bleibt", () => {
    expect(names(sortStudents(students, "quatsch"))).toEqual(names(students));
  });

  test("das Original-Array wird nicht verändert", () => {
    sortStudents(students, "name-asc");
    expect(students[0].name).toBe("Max Mustermann");
  });
});
