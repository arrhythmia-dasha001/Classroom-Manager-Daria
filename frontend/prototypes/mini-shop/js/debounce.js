// debounce.js – Funktion erst ausführen, wenn eine Weile Ruhe ist.
// Beispiel Suche: Jeder Tastendruck startet den Timer neu.
// Erst wenn 300 ms keine Taste mehr kommt, wird wirklich gesucht → 1 Anfrage statt 6.
export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer); // alten Timer löschen
    timer = setTimeout(() => fn(...args), delay); // neuen starten
  };
}
