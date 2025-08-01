const User = require('../src/user');

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User('Max Mustermann', 'max@example.com', 25);
  });

  describe('Konstruktor', () => {
    test('sollte einen Benutzer mit korrekten Eigenschaften erstellen', () => {
      expect(user.name).toBe('Max Mustermann');
      expect(user.email).toBe('max@example.com');
      expect(user.age).toBe(25);
      expect(user.isActive).toBe(true);
    });
  });

  describe('isValidEmail', () => {
    test('sollte gültige E-Mail-Adressen erkennen', () => {
      expect(user.isValidEmail()).toBe(true);
      
      user.email = 'test@domain.co.uk';
      expect(user.isValidEmail()).toBe(true);
    });

    test('sollte ungültige E-Mail-Adressen erkennen', () => {
      user.email = 'invalid-email';
      expect(user.isValidEmail()).toBe(false);

      user.email = '@example.com';
      expect(user.isValidEmail()).toBe(false);

      user.email = 'test@';
      expect(user.isValidEmail()).toBe(false);

      user.email = '';
      expect(user.isValidEmail()).toBe(false);
    });
  });

  describe('isAdult', () => {
    test('sollte true für Personen ab 18 Jahren zurückgeben', () => {
      user.age = 18;
      expect(user.isAdult()).toBe(true);

      user.age = 25;
      expect(user.isAdult()).toBe(true);

      user.age = 65;
      expect(user.isAdult()).toBe(true);
    });

    test('sollte false für Personen unter 18 Jahren zurückgeben', () => {
      user.age = 17;
      expect(user.isAdult()).toBe(false);

      user.age = 0;
      expect(user.isAdult()).toBe(false);

      user.age = 16;
      expect(user.isAdult()).toBe(false);
    });
  });

  describe('updateAge', () => {
    test('sollte das Alter korrekt aktualisieren', () => {
      user.updateAge(30);
      expect(user.age).toBe(30);

      user.updateAge(0);
      expect(user.age).toBe(0);
    });

    test('sollte einen Fehler bei ungültigem Alter werfen', () => {
      expect(() => user.updateAge(-5)).toThrow('Alter muss eine positive Zahl sein');
      expect(() => user.updateAge('25')).toThrow('Alter muss eine positive Zahl sein');
      expect(() => user.updateAge(null)).toThrow('Alter muss eine positive Zahl sein');
    });
  });

  describe('deactivate und activate', () => {
    test('sollte den Benutzer deaktivieren können', () => {
      expect(user.isActive).toBe(true);
      
      user.deactivate();
      expect(user.isActive).toBe(false);
    });

    test('sollte den Benutzer aktivieren können', () => {
      user.deactivate();
      expect(user.isActive).toBe(false);
      
      user.activate();
      expect(user.isActive).toBe(true);
    });
  });

  describe('toJSON', () => {
    test('sollte alle Benutzerdaten als Objekt zurückgeben', () => {
      const userData = user.toJSON();
      
      expect(userData).toEqual({
        name: 'Max Mustermann',
        email: 'max@example.com',
        age: 25,
        isActive: true
      });
    });

    test('sollte aktuelle Werte reflektieren', () => {
      user.updateAge(30);
      user.deactivate();
      
      const userData = user.toJSON();
      
      expect(userData.age).toBe(30);
      expect(userData.isActive).toBe(false);
    });
  });
});
