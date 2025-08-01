/**
 * Hilfsfunktionen für verschiedene Operationen
 */

/**
 * Kehrt einen String um
 * @param {string} str 
 * @returns {string}
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Parameter muss ein String sein');
  }
  return str.split('').reverse().join('');
}

/**
 * Kapitalisiert den ersten Buchstaben eines Strings
 * @param {string} str 
 * @returns {string}
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Parameter muss ein String sein');
  }
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Prüft ob eine Zahl gerade ist
 * @param {number} num 
 * @returns {boolean}
 */
function isEven(num) {
  if (typeof num !== 'number') {
    throw new Error('Parameter muss eine Zahl sein');
  }
  return num % 2 === 0;
}

/**
 * Entfernt doppelte Werte aus einem Array
 * @param {Array} arr 
 * @returns {Array}
 */
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Parameter muss ein Array sein');
  }
  return [...new Set(arr)];
}

/**
 * Berechnet den Durchschnitt eines Arrays von Zahlen
 * @param {number[]} numbers 
 * @returns {number}
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
 * Simuliert eine asynchrone Operation
 * @param {number} delay 
 * @returns {Promise<string>}
 */
function asyncOperation(delay = 100) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operation completed');
    }, delay);
  });
}

module.exports = {
  reverseString,
  capitalize,
  isEven,
  removeDuplicates,
  average,
  asyncOperation
};
