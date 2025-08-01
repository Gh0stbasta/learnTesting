module.exports = {
  // Test-Umgebung
  testEnvironment: 'node',
  
  // Verzeichnisse für Tests
  testMatch: [
    '**/tests/**/*.test.js',
    '**/__tests__/**/*.js',
    '**/*.test.js'
  ],
  
  // Coverage-Einstellungen
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/**/index.js'
  ],
  
  // Coverage-Schwellenwerte
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Verbose Output für detaillierte Test-Ergebnisse
  verbose: true,
  
  // Setup-Dateien (falls benötigt)
  // setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  
  // Module, die nicht transformiert werden sollen
  transformIgnorePatterns: [
    'node_modules/(?!(module-that-needs-to-be-transformed)/)'
  ]
};
