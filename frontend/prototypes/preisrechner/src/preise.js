/**
 * Preis-Funktionen für einen Online-Shop: Brutto, Rabatt und Anzeige in Euro.
 * @module preise
 */

/**
 * Berechnet den Bruttopreis aus Nettopreis und Steuersatz.
 * @param {number} netto - Nettopreis in Euro.
 * @param {number} satz - Steuersatz in Prozent, z. B. 19 oder 7.
 * @returns {number} Bruttopreis in Euro, auf Cent gerundet.
 * @example
 * brutto(100, 19); // 119
 * brutto(14.5, 7); // 15.52
 */
export function brutto(netto, satz) {
  return runden(netto * (1 + satz / 100))
}

/**
 * Zieht einen Rabatt in Prozent vom Preis ab.
 * @param {number} preis - Preis in Euro.
 * @param {number} prozent - Rabatt in Prozent (0 bis 100).
 * @returns {number} Neuer Preis in Euro, auf Cent gerundet.
 * @throws {RangeError} Wenn der Rabatt kleiner als 0 oder größer als 100 ist.
 * @example
 * rabatt(50, 10); // 45
 */
export function rabatt(preis, prozent) {
  if (prozent < 0 || prozent > 100) {
    throw new RangeError('Rabatt muss zwischen 0 und 100 liegen')
  }
  return runden(preis * (1 - prozent / 100))
}

/**
 * Rundet einen Betrag auf zwei Nachkommastellen (Cent).
 * @param {number} betrag - Betrag in Euro.
 * @returns {number} Gerundeter Betrag.
 * @example
 * runden(15.515); // 15.52
 */
export function runden(betrag) {
  return Math.round(betrag * 100) / 100
}

/**
 * Formatiert einen Betrag für die Anzeige im Shop.
 * @param {number} betrag - Betrag in Euro.
 * @returns {string} Betrag mit Komma und Euro-Zeichen.
 * @example
 * formatEuro(15.5); // "15,50 €"
 */
export function formatEuro(betrag) {
  return betrag.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
}
