/**
 * Eine einfache User-Klasse für Benutzerverwaltung
 */
class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.isActive = true;
  }

  /**
   * Validiert die E-Mail-Adresse
   * @returns {boolean}
   */
  isValidEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  /**
   * Prüft ob der Benutzer volljährig ist
   * @returns {boolean}
   */
  isAdult() {
    return this.age >= 18;
  }

  /**
   * Aktualisiert das Alter des Benutzers
   * @param {number} newAge 
   */
  updateAge(newAge) {
    if (typeof newAge !== 'number' || newAge < 0) {
      throw new Error('Alter muss eine positive Zahl sein');
    }
    this.age = newAge;
  }

  /**
   * Deaktiviert den Benutzer
   */
  deactivate() {
    this.isActive = false;
  }

  /**
   * Aktiviert den Benutzer
   */
  activate() {
    this.isActive = true;
  }

  /**
   * Gibt die Benutzerdaten als Objekt zurück
   * @returns {object}
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

module.exports = User;
