#!/bin/bash

echo "🔧 Testing Devcontainer Setup..."
echo ""

# Test Node.js and npm
echo "📋 Checking Node.js and npm versions:"
node --version
npm --version
echo ""

# Test npm install
echo "📦 Installing dependencies:"
npm install
echo ""

# Test Jest
echo "🧪 Running tests:"
npm test
echo ""

echo "✅ Devcontainer setup test completed!"
