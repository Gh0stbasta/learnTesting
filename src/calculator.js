/**
 * Eine einfache Calculator-Klasse für mathematische Operationen
 */
class Calculator {
  /**
   * Addiert zwei Zahlen
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
   */
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    return a + b;
  }

  /**
   * Subtrahiert zwei Zahlen
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
   */
  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    return a - b;
  }

  /**
   * Multipliziert zwei Zahlen
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
   */
  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    return a * b;
  }

  /**
   * Dividiert zwei Zahlen
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
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
   * Berechnet die Potenz einer Zahl
   * @param {number} base 
   * @param {number} exponent 
   * @returns {number}
   */
  power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Beide Parameter müssen Zahlen sein');
    }
    return Math.pow(base, exponent);
  }
}

module.exports = Calculator;
