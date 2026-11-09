// מריץ את כל קבצי *.test.js שבתיקייה הזו.   שימוש:  node tests/run.js
const fs = require('fs');
const path = require('path');
let passed = 0, failed = 0;

global.test = function (name, fn) {
  try { fn(); passed++; console.log("  ✓ " + name); }
  catch (e) { failed++; console.log("  ✗ " + name + "\n      " + e.message); }
};
global.assertEq = function (actual, expected) {
  const sameValue = function (a, b) {
    if (a === b) return true;
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      return a.every(function (v, i) { return sameValue(v, b[i]); });
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const aKeys = Object.keys(a); const bKeys = Object.keys(b);
      if (aKeys.length !== bKeys.length) return false;
      return aKeys.every(function (k) { return Object.prototype.hasOwnProperty.call(b, k) && sameValue(a[k], b[k]); });
    }
    return false;
  };

  if (!sameValue(actual, expected)) {
    throw new Error("expected " + JSON.stringify(expected) + " but got " + JSON.stringify(actual));
  }
};

fs.readdirSync(__dirname)
  .filter(function (f) { return f.endsWith('.test.js'); })
  .sort()
  .forEach(function (f) {
    console.log(f);
    require(path.join(__dirname, f));
  });

console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed ? 1 : 0);
