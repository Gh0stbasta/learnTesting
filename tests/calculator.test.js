const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  // Setup vor jedem Test
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('sollte zwei positive Zahlen korrekt addieren', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('sollte mit negativen Zahlen funktionieren', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
      expect(calculator.add(-2, 3)).toBe(1);
    });

    test('sollte mit Null funktionieren', () => {
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('sollte einen Fehler werfen bei ungültigen Parametern', () => {
      expect(() => calculator.add('2', 3)).toThrow('Beide Parameter müssen Zahlen sein');
      expect(() => calculator.add(2, '3')).toThrow('Beide Parameter müssen Zahlen sein');
      expect(() => calculator.add(null, 3)).toThrow('Beide Parameter müssen Zahlen sein');
    });
  });

  describe('subtract', () => {
    test('sollte zwei Zahlen korrekt subtrahieren', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('sollte mit Null funktionieren', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply', () => {
    test('sollte zwei Zahlen korrekt multiplizieren', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
      expect(calculator.multiply(-3, 4)).toBe(-12);
    });

    test('sollte mit Null das Ergebnis Null geben', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    test('sollte zwei Zahlen korrekt dividieren', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('sollte einen Fehler bei Division durch Null werfen', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division durch Null ist nicht erlaubt');
    });

    test('sollte Null durch eine Zahl dividieren können', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });
  });

  describe('power', () => {
    test('sollte Potenzen korrekt berechnen', () => {
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.power(5, 2)).toBe(25);
      expect(calculator.power(2, 0)).toBe(1);
    });

    test('sollte mit negativen Exponenten funktionieren', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });
  });
});
