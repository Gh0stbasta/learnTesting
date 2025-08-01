/**
 * Eine einfache Calculator-Klasse für mathematische Operationen
 * KONZEPT: Stateless Calculator - keine internen Zustandsvariablen
 * Jede Operation ist eine reine Funktion (pure function)
 * Demonstriert defensive Programmierung mit Eingabevalidierung
 */
class Calculator {
  /**
   * Addiert zwei Zahlen
   * BESONDERHEITEN:
   * - Typvalidierung vor Berechnung (defensive Programmierung)
   * - Wirft Fehler bei ungültigen Eingaben statt stillschweigend zu konvertieren
   * - JavaScript würde normalerweise automatisch konvertieren ("5" + 3 = "53")
   * 
   * @param {number} a - Erste Zahl (Summand) 
   * @param {number} b - Zweite Zahl (Summand)
   * @returns {number} Die Summe von a und b
   * @throws {Error} Wenn a oder b keine Zahlen sind
   */
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    return a + b;
  }

  /**
   * Subtrahiert die zweite Zahl von der ersten
   * BESONDERHEIT: Reihenfolge der Parameter ist wichtig!
   * subtract(10, 3) = 7, aber subtract(3, 10) = -7
   * 
   * @param {number} a - Minuend (die Zahl von der subtrahiert wird)
   * @param {number} b - Subtrahend (die Zahl die abgezogen wird)
   * @returns {number} Die Differenz von a und b (a - b)
   * @throws {Error} Wenn a oder b keine Zahlen sind
   */
  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    return a - b;
  }

  /**
   * Multipliziert zwei Zahlen
   * BESONDERHEIT: Kommutativ - Reihenfolge spielt keine Rolle
   * multiply(3, 4) = multiply(4, 3) = 12
   * Behandelt auch Sonderfälle wie Multiplikation mit 0 oder negativen Zahlen
   * 
   * @param {number} a - Erste Zahl (Faktor)
   * @param {number} b - Zweite Zahl (Faktor)
   * @returns {number} Das Produkt von a und b
   * @throws {Error} Wenn a oder b keine Zahlen sind
   */
  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    return a * b;
  }

  /**
   * Dividiert die erste Zahl durch die zweite
   * BESONDERHEITEN:
   * - Reihenfolge ist wichtig: divide(10, 2) = 5, aber divide(2, 10) = 0.2
   * - Spezielle Validierung gegen Division durch Null
   * - JavaScript würde normalerweise Infinity zurückgeben bei Division durch 0
   * - Hier wird stattdessen ein aussagekräftiger Fehler geworfen
   * 
   * @param {number} a - Dividend (die Zahl die geteilt wird)
   * @param {number} b - Divisor (die Zahl durch die geteilt wird)
   * @returns {number} Der Quotient von a und b (a / b)
   * @throws {Error} Wenn a oder b keine Zahlen sind oder b gleich 0 ist
   */
  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    if (b === 0) {
      throw new Error('Division durch Null ist nicht erlaubt');
    }
    return a / b;
  }

  /**
   * Berechnet die Potenz einer Zahl (base^exponent)
   * BESONDERHEITEN:
   * - Verwendet Math.pow() statt ** Operator für bessere Kompatibilität
   * - Behandelt Sonderfälle: power(0, 0) = 1, power(x, 0) = 1, power(0, x) = 0
   * - Negative Exponenten sind erlaubt: power(2, -3) = 0.125
   * - Reihenfolge ist kritisch wichtig: power(2, 3) ≠ power(3, 2)
   * 
   * @param {number} base - Basis (die Zahl die potenziert wird)
   * @param {number} exponent - Exponent (wie oft die Basis mit sich selbst multipliziert wird)
   * @returns {number} Das Ergebnis von base^exponent
   * @throws {Error} Wenn base oder exponent keine Zahlen sind
   */
  power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    return Math.pow(base, exponent);
  }
}

// CommonJS Export für Node.js Module System
// BESONDERHEIT: Exportiert die gesamte Klasse, nicht eine Instanz
module.exports = Calculator;
