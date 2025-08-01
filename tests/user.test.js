// CommonJS Import - lädt die User-Klasse aus dem src Verzeichnis
// BESONDERHEIT: '../' navigiert ein Verzeichnis nach oben (von tests/ zu root/)
const User = require('../src/user');

// Haupttestgruppe (Test Suite) für die User-Klasse
// describe() gruppiert verwandte Tests und erstellt einen Testkontext
// KONZEPT: Hierarchische Testorganisation für bessere Übersicht
describe('User', () => {
  // Shared Variable für alle Tests in dieser Suite
  // let statt const, da die Variable in beforeEach() neu zugewiesen wird
  let user;

  // Setup-Hook: wird vor JEDEM Test in dieser Gruppe ausgeführt
  // BESONDERHEIT: Sorgt für isolierte Tests (jeder Test startet "frisch")
  // Verhindert, dass Tests sich gegenseitig beeinflussen
  beforeEach(() => {
    user = new User('Max Mustermann', 'max@example.com', 25);
  });

  // Verschachtelte Testgruppe für Konstruktor-Tests
  // ORGANISATIONSKONZEPT: Gruppierung nach Funktionalität
  describe('Konstruktor', () => {
    // Einzelner Testfall (Test Case)
    // test() und it() sind identisch - test() ist expliziter, it() liest sich natürlicher
    test('sollte einen Benutzer mit korrekten Eigenschaften erstellen', () => {
      // expect() ist Jest's Assertion Library
      // toBe() prüft auf exakte Gleichheit (===)
      // BESONDERHEIT: Jede Assertion ist eine separate Prüfung
      expect(user.name).toBe('Max Mustermann');
      expect(user.email).toBe('max@example.com');
      expect(user.age).toBe(25);
      expect(user.isActive).toBe(true); // Default-Wert aus Konstruktor
    });
  });

  // Testgruppe für E-Mail-Validierung
  // TESTKONZEPT: Positive und negative Testfälle
  describe('isValidEmail', () => {
    // Positive Testfälle: Was funktionieren SOLL
    test('sollte gültige E-Mail-Adressen erkennen', () => {
      // Test mit der Standard-E-Mail aus beforeEach()
      expect(user.isValidEmail()).toBe(true);
      
      // Dynamischer Test: E-Mail ändern und erneut testen
      // BESONDERHEIT: Mutation des Objekts innerhalb des Tests
      user.email = 'test@domain.co.uk';
      expect(user.isValidEmail()).toBe(true);
    });

    // Negative Testfälle: Was NICHT funktionieren soll
    // WICHTIG: Testet Edge Cases und ungültige Eingaben
    test('sollte ungültige E-Mail-Adressen erkennen', () => {
      // Verschiedene Arten von ungültigen E-Mails
      user.email = 'invalid-email'; // Kein @ Symbol
      expect(user.isValidEmail()).toBe(false);

      user.email = '@example.com'; // Beginnt mit @
      expect(user.isValidEmail()).toBe(false);

      user.email = 'test@'; // Endet mit @
      expect(user.isValidEmail()).toBe(false);

      user.email = ''; // Leerer String (Edge Case)
      expect(user.isValidEmail()).toBe(false);
    });
  });

  // Testgruppe für Volljährigkeitsprüfung
  // BOUNDARY TESTING: Testet Grenzwerte (18 Jahre ist die Grenze)
  describe('isAdult', () => {
    // Positive Fälle: Volljährige Personen
    test('sollte true für Personen ab 18 Jahren zurückgeben', () => {
      // Grenzfall: Genau 18 Jahre (wichtigster Test!)
      user.age = 18;
      expect(user.isAdult()).toBe(true);

      // Normale Erwachsene
      user.age = 25;
      expect(user.isAdult()).toBe(true);

      // Ältere Personen
      user.age = 65;
      expect(user.isAdult()).toBe(true);
    });

    // Negative Fälle: Minderjährige Personen
    test('sollte false für Personen unter 18 Jahren zurückgeben', () => {
      // Grenzfall: Ein Jahr unter der Grenze
      user.age = 17;
      expect(user.isAdult()).toBe(false);

      // Edge Case: Neugeborenes
      user.age = 0;
      expect(user.isAdult()).toBe(false);

      // Typischer Teenager
      user.age = 16;
      expect(user.isAdult()).toBe(false);
    });
  });

  // Testgruppe für updateAge() Methode
  // KOMBINIERT: Positive Tests + Exception Testing
  describe('updateAge', () => {
    // Happy Path: Normale, gültige Verwendung
    test('sollte das Alter korrekt aktualisieren', () => {
      user.updateAge(30);
      expect(user.age).toBe(30);

      // Edge Case: Alter 0 ist technisch gültig
      user.updateAge(0);
      expect(user.age).toBe(0);
    });

    // Exception Testing: Prüft dass Fehler korrekt geworfen werden
    // BESONDERHEIT: expect(() => ...) für Funktionen die Fehler werfen
    test('sollte einen Fehler bei ungültigem Alter werfen', () => {
      // Negative Zahl
      expect(() => user.updateAge(-5)).toThrow('Alter muss eine positive Zahl sein');
      
      // String statt Zahl (Type Coercion vermeiden)
      expect(() => user.updateAge('25')).toThrow('Alter muss eine positive Zahl sein');
      
      // null/undefined
      expect(() => user.updateAge(null)).toThrow('Alter muss eine positive Zahl sein');
    });
  });

  // Testgruppe für Aktivierung/Deaktivierung
  // STATE TRANSITION TESTING: Prüft Zustandsübergänge
  describe('deactivate und activate', () => {
    // Test für Deaktivierung
    test('sollte den Benutzer deaktivieren können', () => {
      // Vorbedingung prüfen (User startet als aktiv)
      expect(user.isActive).toBe(true);
      
      // Aktion ausführen
      user.deactivate();
      
      // Nachbedingung prüfen
      expect(user.isActive).toBe(false);
    });

    // Test für Reaktivierung
    // BESONDERHEIT: Teste kompletten Zyklus deaktivieren -> aktivieren
    test('sollte den Benutzer aktivieren können', () => {
      // Setup: User deaktivieren
      user.deactivate();
      expect(user.isActive).toBe(false);
      
      // Aktion: User wieder aktivieren
      user.activate();
      expect(user.isActive).toBe(true);
    });
  });

  // Testgruppe für JSON-Serialisierung
  // DATA TRANSFORMATION TESTING: Prüft Datenkonvertierung
  describe('toJSON', () => {
    // Test der Standard-Serialisierung
    test('sollte alle Benutzerdaten als Objekt zurückgeben', () => {
      const userData = user.toJSON();
      
      // toEqual() statt toBe() für Objektvergleiche
      // UNTERSCHIED: toBe() prüft Referenzgleichheit, toEqual() prüft Inhaltsgleichheit
      expect(userData).toEqual({
        name: 'Max Mustermann',
        email: 'max@example.com',
        age: 25,
        isActive: true
      });
    });

    // Test dass aktuelle Werte reflektiert werden
    // WICHTIG: Testet dass toJSON() den aktuellen Zustand zurückgibt
    test('sollte aktuelle Werte reflektieren', () => {
      // Zustand ändern
      user.updateAge(30);
      user.deactivate();
      
      // JSON sollte geänderte Werte enthalten
      const userData = user.toJSON();
      
      expect(userData.age).toBe(30);
      expect(userData.isActive).toBe(false);
    });
  });
});
