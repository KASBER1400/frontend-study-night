// Simple test for shuffle function (works with any Node.js version)
import { shuffle } from './starter/src/shuffle.js';

console.log('\n========== RUNNING UNIT TESTS ==========\n');

let passed = 0;
let failed = 0;

const assert = (condition, testName) => {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.log(`❌ FAIL: ${testName}`);
    failed++;
  }
};

// Test 1: Should shuffle the indexes of an array
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffle([...originalArray]);
assert(shuffledArray.length === originalArray.length, 'Array length remains the same');
assert(originalArray.every(v => shuffledArray.includes(v)), 'All original elements are still present');
assert(shuffledArray.toString() !== originalArray.toString(), 'Order has changed');

// Test 2: Should handle empty array
const emptyArray = [];
const resultEmpty = shuffle(emptyArray);
assert(resultEmpty.length === 0, 'Empty array remains empty');

// Test 3: Should handle array with one element
const singleArray = [42];
const resultSingle = shuffle(singleArray);
assert(resultSingle.length === 1 && resultSingle[0] === 42, 'Single element array unchanged');

console.log(`\n========== RESULTS: ${passed} passed, ${failed} failed ==========\n`);

if (failed === 0) {
  console.log('🎉 All tests passed!');
  process.exit(0);
} else {
  console.log('⚠️ Some tests failed');
  process.exit(1);
}