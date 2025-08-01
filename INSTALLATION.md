# Installation von Node.js und npm

Da Node.js und npm nicht auf Ihrem System installiert sind, folgen Sie bitte diesen Schritten:

## Option 1: Mit Homebrew (empfohlen für macOS)

```bash
# Homebrew installieren (falls noch nicht vorhanden)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js und npm installieren
brew install node
```

## Option 2: Direkt von der Node.js Website

1. Gehen Sie zu https://nodejs.org/
2. Laden Sie die LTS-Version für macOS herunter
3. Führen Sie das Installationsprogramm aus

## Überprüfung der Installation

Nach der Installation können Sie überprüfen, ob alles korrekt installiert wurde:

```bash
node --version
npm --version
```

## Tests ausführen

Sobald Node.js und npm installiert sind, können Sie die Tests ausführen:

```bash
# In das Projektverzeichnis wechseln
cd /Users/sschmidpeter/Documents/learnTesting

# Abhängigkeiten installieren
npm install

# Tests ausführen
npm test
```
