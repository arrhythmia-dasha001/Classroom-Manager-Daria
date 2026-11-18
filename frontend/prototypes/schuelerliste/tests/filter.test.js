// filter.test.js – Unit-Tests für filter.js (Start: npm test)
import { jest } from "@jest/globals";
import {
  filterStudents,
  sortStudents,
  debounce,
  filterToQuery,
  queryToFilter,
} from "../js/filter.js";

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

describe("debounce", () => {
  test("führt die Funktion nur einmal aus, mit dem letzten Wert", () => {
    jest.useFakeTimers(); // Zeit im Test selbst vorspulen statt echt zu warten
    const fn = jest.fn();
    const debounced = debounce(fn, 300);

    debounced("a");
    debounced("an");
    debounced("ann");
    expect(fn).not.toHaveBeenCalled(); // noch zu früh

    jest.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("ann");
    jest.useRealTimers();
  });
});

describe("URL-Query", () => {
  test("Standardwerte → leere Query", () => {
    expect(filterToQuery({ search: "  ", klasse: "alle", sortBy: "name-asc" })).toBe("");
  });

  test("alle Filter gesetzt → alle in der Query", () => {
    const query = filterToQuery({ search: "lena", klasse: "FI24A", sortBy: "name-desc" });
    expect(query).toBe("?suche=lena&klasse=FI24A&sortierung=name-desc");
  });

  test("Query wird wieder zu Filtern", () => {
    expect(queryToFilter("?suche=lena&klasse=FI24A")).toEqual({
      search: "lena",
      klasse: "FI24A",
      sortBy: "name-asc",
    });
  });

  test("leere Query → Standardwerte", () => {
    expect(queryToFilter("")).toEqual({ search: "", klasse: "alle", sortBy: "name-asc" });
  });
});
