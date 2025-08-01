/**
 * Beispiel-Script, das die erstellten Klassen und Funktionen verwendet
 * Führen Sie dieses Script mit: node demo.js
 */

const Calculator = require('./src/calculator');
const User = require('./src/user');
const { reverseString, capitalize, isEven, removeDuplicates, average } = require('./src/utils');

console.log('=== JavaScript Unit-Testing Demo ===\n');

// Calculator Demo
console.log('📱 Calculator Demo:');
const calc = new Calculator();
console.log(`5 + 3 = ${calc.add(5, 3)}`);
console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
console.log(`6 * 7 = ${calc.multiply(6, 7)}`);
console.log(`15 / 3 = ${calc.divide(15, 3)}`);
console.log(`2^4 = ${calc.power(2, 4)}\n`);

// User Demo
console.log('👤 User Demo:');
const user = new User('Anna Schmidt', 'anna@example.com', 28);
console.log(`Name: ${user.name}`);
console.log(`E-Mail gültig: ${user.isValidEmail()}`);
console.log(`Volljährig: ${user.isAdult()}`);
console.log(`Benutzer-Daten:`, user.toJSON());
console.log('');

// Utils Demo
console.log('🔧 Utils Demo:');
console.log(`Reverse "Hello": ${reverseString('Hello')}`);
console.log(`Capitalize "javascript": ${capitalize('javascript')}`);
console.log(`Ist 42 gerade: ${isEven(42)}`);
console.log(`Duplikate entfernen [1,2,2,3,3]: [${removeDuplicates([1,2,2,3,3])}]`);
console.log(`Durchschnitt von [1,2,3,4,5]: ${average([1,2,3,4,5])}`);

console.log('\n🧪 Um die Tests auszuführen, verwenden Sie: npm test');
console.log('📊 Für Code-Coverage: npm run test:coverage');
console.log('👀 Für Watch-Modus: npm run test:watch');
