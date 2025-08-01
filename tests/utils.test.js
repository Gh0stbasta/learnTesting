const {
  reverseString,
  capitalize,
  isEven,
  removeDuplicates,
  average,
  asyncOperation
} = require('../src/utils');

describe('Utils', () => {
  
  describe('reverseString', () => {
    test('sollte einen String umkehren', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('JavaScript')).toBe('tpircSavaJ');
    });

    test('sollte mit leeren Strings funktionieren', () => {
      expect(reverseString('')).toBe('');
    });

    test('sollte mit einem einzelnen Zeichen funktionieren', () => {
      expect(reverseString('a')).toBe('a');
    });

    test('sollte einen Fehler bei nicht-String Parametern werfen', () => {
      expect(() => reverseString(123)).toThrow('Parameter muss ein String sein');
      expect(() => reverseString(null)).toThrow('Parameter muss ein String sein');
    });
  });

  describe('capitalize', () => {
    test('sollte den ersten Buchstaben großschreiben', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('javaScript')).toBe('Javascript');
      expect(capitalize('WORLD')).toBe('World');
    });

    test('sollte mit leeren Strings funktionieren', () => {
      expect(capitalize('')).toBe('');
    });

    test('sollte mit einem einzelnen Zeichen funktionieren', () => {
      expect(capitalize('a')).toBe('A');
      expect(capitalize('A')).toBe('A');
    });

    test('sollte einen Fehler bei nicht-String Parametern werfen', () => {
      expect(() => capitalize(123)).toThrow('Parameter muss ein String sein');
    });
  });

  describe('isEven', () => {
    test('sollte gerade Zahlen erkennen', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
      expect(isEven(100)).toBe(true);
    });

    test('sollte ungerade Zahlen erkennen', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(-3)).toBe(false);
      expect(isEven(99)).toBe(false);
    });

    test('sollte einen Fehler bei nicht-Zahlen werfen', () => {
      expect(() => isEven('2')).toThrow('Parameter muss eine Zahl sein');
      expect(() => isEven(null)).toThrow('Parameter muss eine Zahl sein');
    });
  });

  describe('removeDuplicates', () => {
    test('sollte doppelte Werte entfernen', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('sollte mit leeren Arrays funktionieren', () => {
      expect(removeDuplicates([])).toEqual([]);
    });

    test('sollte mit Arrays ohne Duplikate funktionieren', () => {
      expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('sollte einen Fehler bei nicht-Arrays werfen', () => {
      expect(() => removeDuplicates('not an array')).toThrow('Parameter muss ein Array sein');
    });
  });

  describe('average', () => {
    test('sollte den Durchschnitt berechnen', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
      expect(average([10, 20])).toBe(15);
      expect(average([5])).toBe(5);
    });

    test('sollte mit negativen Zahlen funktionieren', () => {
      expect(average([-1, -2, -3])).toBe(-2);
      expect(average([-5, 5])).toBe(0);
    });

    test('sollte einen Fehler bei leeren Arrays werfen', () => {
      expect(() => average([])).toThrow('Array darf nicht leer sein');
    });

    test('sollte einen Fehler bei nicht-Arrays werfen', () => {
      expect(() => average('not an array')).toThrow('Parameter muss ein Array sein');
    });

    test('sollte einen Fehler bei nicht-numerischen Array-Elementen werfen', () => {
      expect(() => average([1, 2, 'three'])).toThrow('Alle Array-Elemente müssen Zahlen sein');
    });
  });

  describe('asyncOperation', () => {
    test('sollte ein Promise zurückgeben', () => {
      const result = asyncOperation();
      expect(result).toBeInstanceOf(Promise);
    });

    test('sollte nach der angegebenen Zeit resolven', async () => {
      const result = await asyncOperation(50);
      expect(result).toBe('Operation completed');
    });

    test('sollte mit Standard-Delay funktionieren', async () => {
      const startTime = Date.now();
      await asyncOperation();
      const endTime = Date.now();
      
      // Sollte mindestens 100ms dauern (mit etwas Toleranz)
      expect(endTime - startTime).toBeGreaterThanOrEqual(90);
    });

    test('sollte mit spezifischem Delay funktionieren', async () => {
      const startTime = Date.now();
      await asyncOperation(200);
      const endTime = Date.now();
      
      // Sollte mindestens 200ms dauern (mit etwas Toleranz)
      expect(endTime - startTime).toBeGreaterThanOrEqual(190);
    });
  });
});
