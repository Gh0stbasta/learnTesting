# JavaScript Unit-Testing mit Jest

Ein einfaches Beispielprojekt, das zeigt, wie man Unit-Tests in JavaScript mit Jest schreibt.

## Installation

```bash
npm install
```

## Tests ausführen

```bash
# Alle Tests ausführen
npm test

# Tests im Watch-Modus ausführen (bei Änderungen automatisch neu ausführen)
npm run test:watch

# Tests mit Code-Coverage ausführen
npm run test:coverage
```

## Projektstruktur

```
├── src/
│   ├── calculator.js      # Beispiel-Klasse für mathematische Operationen
│   ├── user.js           # Beispiel-Klasse für Benutzerverwaltung
│   └── utils.js          # Hilfsfunktionen
├── tests/
│   ├── calculator.test.js # Tests für Calculator
│   ├── user.test.js      # Tests für User
│   └── utils.test.js     # Tests für Utils
└── package.json
```

## Was wird getestet?

1. **Calculator**: Grundlegende mathematische Operationen
2. **User**: Einfache Benutzerverwaltung mit Validierung
3. **Utils**: Hilfsfunktionen wie String-Manipulation und Array-Operationen

## Jest Grundlagen

- `describe()`: Gruppiert zusammengehörige Tests
- `test()` oder `it()`: Definiert einzelne Tests
- `expect()`: Erstellt Assertions
- `beforeEach()`: Setup vor jedem Test
- `afterEach()`: Cleanup nach jedem Test
