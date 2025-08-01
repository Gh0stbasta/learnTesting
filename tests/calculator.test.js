// Import der Calculator-Klasse für Tests
// ARCHITEKTUR: Jede Klasse hat ihre eigene Test-Datei
const Calculator = require('../src/calculator');

// Haupttestgruppe für Calculator-Funktionalität
// TESTPHILOSOPHIE: Eine Calculator-Instanz pro Test für Isolation
describe('Calculator', () => {
  let calculator;

  // Setup-Hook: Neue Calculator-Instanz vor jedem Test
  // WARUM: Obwohl Calculator stateless ist, demonstriert das Pattern
  // BEST PRACTICE: Isolierte Test-Umgebungen
  beforeEach(() => {
    calculator = new Calculator();
  });

  // Testgruppe für Addition
  // MATHEMATISCHE TESTABDECKUNG: Verschiedene Zahlenkategorien
  describe('add', () => {
    // Basis-Funktionalität: Positive Zahlen
    test('sollte zwei positive Zahlen korrekt addieren', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    // Edge Cases mit negativen Zahlen
    // WICHTIG: Testet dass Vorzeichen korrekt behandelt werden
    test('sollte mit negativen Zahlen funktionieren', () => {
      expect(calculator.add(-2, -3)).toBe(-5); // Beide negativ
      expect(calculator.add(-2, 3)).toBe(1);   // Gemischt
    });

    // Null als neutrales Element der Addition
    // MATHEMATISCHES KONZEPT: Additive Identität
    test('sollte mit Null funktionieren', () => {
      expect(calculator.add(5, 0)).toBe(5);   // 5 + 0 = 5
      expect(calculator.add(0, 0)).toBe(0);   // 0 + 0 = 0
    });

    // Validierung Tests: Defensive Programmierung
    // PATTERN: expect(() => ...).toThrow() für Exception Testing
    test('sollte einen Fehler werfen bei ungültigen Parametern', () => {
      expect(() => calculator.add('2', 3)).toThrow('Beide Parameter müssen Zahlen sein');
      expect(() => calculator.add(2, '3')).toThrow('Beide Parameter müssen Zahlen sein');
      expect(() => calculator.add(null, 3)).toThrow('Beide Parameter müssen Zahlen sein');
    });
  });

  // Testgruppe für Subtraktion
  // BESONDERHEIT: Reihenfolge ist bei Subtraktion wichtig (nicht kommutativ)
  describe('subtract', () => {
    // Grundfunktionalität: Zeigt Reihenfolgen-Abhängigkeit
    test('sollte zwei Zahlen korrekt subtrahieren', () => {
      expect(calculator.subtract(5, 3)).toBe(2);  // 5 - 3 = 2
      expect(calculator.subtract(3, 5)).toBe(-2); // 3 - 5 = -2 (anderes Ergebnis!)
    });

    // Null-Tests für Subtraktion
    // MATHEMATISCH: 0 ist neutrales Element nur auf der rechten Seite
    test('sollte mit Null funktionieren', () => {
      expect(calculator.subtract(5, 0)).toBe(5);  // 5 - 0 = 5
      expect(calculator.subtract(0, 5)).toBe(-5); // 0 - 5 = -5
    });
  });

  // Testgruppe für Multiplikation
  // EIGENSCHAFT: Kommutativ (Reihenfolge egal) aber trotzdem wichtige Edge Cases
  describe('multiply', () => {
    // Basis-Multiplikation inklusive Vorzeichen-Tests
    test('sollte zwei Zahlen korrekt multiplizieren', () => {
      expect(calculator.multiply(4, 5)).toBe(20);   // Positive * Positive
      expect(calculator.multiply(-3, 4)).toBe(-12); // Negative * Positive = Negative
    });

    // Null als "Absorptions-Element" - alles mal 0 ist 0
    // MATHEMATISCHES KONZEPT: Null annulliert jede Multiplikation
    test('sollte mit Null das Ergebnis Null geben', () => {
      expect(calculator.multiply(5, 0)).toBe(0);  // 5 * 0 = 0
      expect(calculator.multiply(0, 5)).toBe(0);  // 0 * 5 = 0
    });
  });

  // Testgruppe für Division
  // KRITISCHSTE Operation: Division durch Null muss abgefangen werden
  describe('divide', () => {
    // Standard-Divisionsfälle inklusive Dezimalergebnisse
    test('sollte zwei Zahlen korrekt dividieren', () => {
      expect(calculator.divide(10, 2)).toBe(5);   // Ganze Zahl als Ergebnis
      expect(calculator.divide(7, 2)).toBe(3.5);  // Dezimalzahl als Ergebnis
    });

    // WICHTIGSTER TEST: Division durch Null Prevention
    // WARUM: Division durch 0 ist mathematisch undefiniert
    test('sollte einen Fehler bei Division durch Null werfen', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division durch Null ist nicht erlaubt');
    });

    // Edge Case: Null als Dividend (0 / x = 0)
    test('sollte Null durch eine Zahl dividieren können', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });
  });

  // Testgruppe für Potenz-Berechnung
  // KOMPLEXESTE mathematische Operation mit vielen Sonderfällen
  describe('power', () => {
    // Standard-Potenz-Berechnungen
    test('sollte Potenzen korrekt berechnen', () => {
      expect(calculator.power(2, 3)).toBe(8);   // 2³ = 8
      expect(calculator.power(5, 2)).toBe(25);  // 5² = 25
      expect(calculator.power(2, 0)).toBe(1);   // Jede Zahl hoch 0 = 1
    });

    // Negative Exponenten: Kehrwert-Bildung
    // MATHEMATISCH: x^(-n) = 1/(x^n)
    test('sollte mit negativen Exponenten funktionieren', () => {
      expect(calculator.power(2, -2)).toBe(0.25); // 2^(-2) = 1/4 = 0.25
    });
  });
});
