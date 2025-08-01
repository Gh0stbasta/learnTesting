/**
 * Hilfsfunktionen für verschiedene Operationen
 * KONZEPT: Utility Functions - reine Funktionen ohne Seiteneffekte
 * Demonstriert verschiedene JavaScript-Techniken und Algorithmen
 * Alle Funktionen sind stateless und wiederverwendbar
 */

/**
 * Kehrt einen String um (Reverse String)
 * BESONDERHEITEN der Implementierung:
 * - split('') wandelt String in Array von Zeichen um
 * - reverse() kehrt das Array um (mutiert das Array!)
 * - join('') verbindet die Zeichen wieder zu einem String
 * - Funktioniert auch mit Unicode-Zeichen, aber nicht perfekt mit Emojis
 * 
 * @param {string} str - Der umzukehrende String
 * @returns {string} Der umgekehrte String
 * @throws {Error} Wenn str kein String ist
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Parameter muss ein String sein');
  }
  return str.split('').reverse().join('');
}

/**
 * Kapitalisiert den ersten Buchstaben eines Strings
 * BESONDERHEITEN der Implementierung:
 * - charAt(0) ist sicherer als str[0] bei leeren Strings
 * - toUpperCase() nur für ersten Buchstaben
 * - slice(1) nimmt alles ab Index 1 (zweiter Buchstabe)
 * - toLowerCase() für den Rest normalisiert die Eingabe
 * - Behandelt Edge Case: leerer String wird unverändert zurückgegeben
 * 
 * @param {string} str - Der zu kapitalisierende String
 * @returns {string} String mit großem ersten Buchstaben, Rest kleingeschrieben
 * @throws {Error} Wenn str kein String ist
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Parameter muss ein String sein');
  }
  if (str.length === 0) {
    return str; // Edge Case: leerer String
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Prüft ob eine Zahl gerade ist
 * BESONDERHEITEN:
 * - Modulo-Operator (%) gibt den Rest einer Division zurück
 * - Eine Zahl ist gerade, wenn der Rest bei Division durch 2 gleich 0 ist
 * - Funktioniert auch mit negativen Zahlen: isEven(-4) = true
 * - Funktioniert auch mit Dezimalzahlen: isEven(4.0) = true
 * 
 * @param {number} num - Die zu prüfende Zahl
 * @returns {boolean} true wenn die Zahl gerade ist, false wenn ungerade
 * @throws {Error} Wenn num keine Zahl ist
 */
function isEven(num) {
  if (typeof num !== 'number') {
    throw new Error('Parameter muss eine Zahl sein');
  }
  return num % 2 === 0;
}

/**
 * Entfernt doppelte Werte aus einem Array (Deduplication)
 * BESONDERHEITEN der modernen ES6+ Implementierung:
 * - new Set(arr) erstellt ein Set (automatisch ohne Duplikate)
 * - ...new Set(arr) verwendet Spread Syntax um Set zurück in Array zu wandeln
 * - Sehr performant und kurz im Vergleich zu traditionellen Schleifen
 * - Funktioniert mit primitiven Datentypen (Strings, Numbers, Booleans)
 * - Bei Objekten wird Referenzgleichheit geprüft, nicht Inhaltsgleichheit!
 * 
 * @param {Array} arr - Das Array aus dem Duplikate entfernt werden sollen
 * @returns {Array} Neues Array ohne doppelte Werte
 * @throws {Error} Wenn arr kein Array ist
 */
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Parameter muss ein Array sein');
  }
  return [...new Set(arr)];
}

/**
 * Berechnet den Durchschnitt eines Arrays von Zahlen
 * BESONDERHEITEN der Implementierung:
 * - reduce() faltet das Array zu einem einzigen Wert zusammen
 * - acc (Accumulator) sammelt die Summe, num ist das aktuelle Element
 * - Startwert 0 wird als zweiter Parameter an reduce() übergeben
 * - Validierung jedes Elements im Array (nicht nur das Array selbst)
 * - Division durch Array-Länge am Ende für Durchschnitt
 * - Behandelt Edge Case: leeres Array wird abgelehnt (Division durch 0)
 * 
 * @param {number[]} numbers - Array von Zahlen für die Durchschnittsberechnung
 * @returns {number} Der arithmetische Mittelwert aller Zahlen
 * @throws {Error} Wenn numbers kein Array ist, leer ist oder nicht-numerische Werte enthält
 */
function average(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Parameter muss ein Array sein');
  }
  if (numbers.length === 0) {
    throw new Error('Array darf nicht leer sein');
  }
  
  const sum = numbers.reduce((acc, num) => {
    if (typeof num !== 'number') {
      throw new Error('Alle Array-Elemente müssen Zahlen sein');
    }
    return acc + num;
  }, 0);
  
  return sum / numbers.length;
}

/**
 * Simuliert eine asynchrone Operation mit Promise
 * BESONDERHEITEN der asynchronen Programmierung:
 * - Promise ist ein Container für einen zukünftigen Wert
 * - setTimeout() simuliert eine zeitaufwändige Operation (z.B. API Call)
 * - resolve() wird nach der Wartezeit aufgerufen = Promise wird "fulfilled"
 * - Standardwert (delay = 100) wird verwendet wenn kein Parameter übergeben wird
 * - Nützlich für das Testen von async/await Code
 * - Demonstriert das Promise Constructor Pattern
 * 
 * @param {number} delay - Wartezeit in Millisekunden (Standard: 100ms)
 * @returns {Promise<string>} Promise das nach der Wartezeit mit "Operation completed" resolved wird
 */
function asyncOperation(delay = 100) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operation completed');
    }, delay);
  });
}

// Named Exports - jede Funktion wird einzeln exportiert
// BESONDERHEIT: Ermöglicht destrukturierenden Import { reverseString, capitalize }
// Alternative wäre Default Export einer Klasse oder eines Objekts
module.exports = {
  reverseString,
  capitalize,
  isEven,
  removeDuplicates,
  average,
  asyncOperation
};
