/**
 * Eine einfache User-Klasse für Benutzerverwaltung
 * Diese Klasse demonstriert grundlegende OOP-Konzepte in JavaScript:
 * - Konstruktor-Pattern
 * - Validierungsmethoden
 * - Datenmanipulation
 * - JSON-Serialisierung
 */
class User {
  /**
   * Konstruktor für die User-Klasse
   * Initialisiert alle Eigenschaften des Benutzers
   * BESONDERHEIT: isActive wird automatisch auf true gesetzt
   * 
   * @param {string} name - Der vollständige Name des Benutzers
   * @param {string} email - Die E-Mail-Adresse des Benutzers
   * @param {number} age - Das Alter des Benutzers in Jahren
   */
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.isActive = true; // Standardwert: Jeder neue User ist aktiv
  }

  /**
   * Validiert die E-Mail-Adresse des Benutzers
   * Verwendet einen Regular Expression (Regex) für die Validierung
   * 
   * BESONDERHEITEN des verwendeten Regex-Patterns:
   * - ^[^\s@]+ : Mindestens ein Zeichen, das nicht Leerzeichen oder @ ist
   * - @ : Ein @ Symbol (genau eins)
   * - [^\s@]+ : Mindestens ein Zeichen nach dem @, das nicht Leerzeichen oder @ ist
   * - \. : Ein Punkt (escaped, da . ein Regex-Sonderzeichen ist)
   * - [^\s@]+$ : Mindestens ein Zeichen bis zum Ende, das nicht Leerzeichen oder @ ist
   * 
   * @returns {boolean} true wenn E-Mail gültig ist, false wenn ungültig
   */
  isValidEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  /**
   * Prüft ob der Benutzer volljährig ist (18+ Jahre)
   * BESONDERHEIT: Verwendet >= Operator, also 18 ist bereits volljährig
   * In verschiedenen Ländern kann die Volljährigkeit unterschiedlich sein
   * 
   * @returns {boolean} true wenn Benutzer 18 oder älter ist, false wenn jünger
   */
  isAdult() {
    return this.age >= 18;
  }

  /**
   * Aktualisiert das Alter des Benutzers mit Validierung
   * BESONDERHEITEN der Validierung:
   * - typeof Check: Stellt sicher, dass es wirklich eine Zahl ist
   * - Negative Zahlen werden abgelehnt (newAge < 0)
   * - Wirft einen Error bei ungültigen Eingaben (defensive Programmierung)
   * 
   * @param {number} newAge - Das neue Alter (muss positive Zahl sein)
   * @throws {Error} Wenn newAge keine Zahl oder negativ ist
   */
  updateAge(newAge) {
    if (typeof newAge !== 'number' || newAge < 0) {
      throw new Error('Alter muss eine positive Zahl sein');
    }
    this.age = newAge;
  }

  /**
   * Deaktiviert den Benutzer
   * BESONDERHEIT: Simple Zustandsänderung ohne Parameter
   * Könnte erweitert werden um Deaktivierungsgrund, Zeitstempel etc.
   */
  deactivate() {
    this.isActive = false;
  }

  /**
   * Aktiviert den Benutzer wieder
   * BESONDERHEIT: Gegenstück zu deactivate(), ermöglicht Reaktivierung
   * Nützlich für temporäre Sperrungen statt permanenter Löschung
   */
  activate() {
    this.isActive = true;
  }

  /**
   * Gibt die Benutzerdaten als plain JavaScript Object zurück
   * BESONDERHEITEN:
   * - Methoden werden NICHT mit exportiert (nur Daten)
   * - Nützlich für JSON.stringify() oder API-Responses
   * - Erstellt eine "saubere" Kopie ohne Klassenkontext
   * - Name "toJSON" ist Konvention - wird automatisch von JSON.stringify() aufgerufen
   * 
   * @returns {object} Plain Object mit allen Benutzerdaten
   */
  toJSON() {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
      isActive: this.isActive
    };
  }
}

// CommonJS Export - macht die Klasse für andere Module verfügbar
// BESONDERHEIT: Node.js verwendet CommonJS (require/module.exports)
// Im Browser oder mit ES6 Modulen würde man "export default User" verwenden
module.exports = User;
