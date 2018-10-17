const assert = require('assert');
const {findEvenNumbers,findOddNumbers, sumOfNumbers,selectEverySecondElement}= require("./arrayAssignmentLib.js");
const {greatestNumberFromList}= require("./arrayAssignmentLib.js");
const {mapElementsLength}= require("./arrayAssignmentLib.js");
const findEvenNumbersTest = function() {
  assert.deepEqual(findEvenNumbers([]), []); 
  assert.deepEqual(findEvenNumbers([1]), []); 
  assert.deepEqual(findEvenNumbers([2]), [2]); 
  assert.deepEqual(findEvenNumbers([1,2]), [2]); 
  assert.deepEqual(findEvenNumbers([11, 13, 14]), [14]); 
}

const findOddNumbersTest = function() {
  assert.deepEqual(findOddNumbers([]), []); 
  assert.deepEqual(findOddNumbers([1]), [1]); 
  assert.deepEqual(findOddNumbers([2]), []); 
  assert.deepEqual(findOddNumbers([1,2]), [1]); 
  assert.deepEqual(findOddNumbers([11, 13, 14]), [11, 13]); 
}

const sumOfNumbersTest = function() {
  assert.equal(sumOfNumbers([]), 0);
  assert.equal(sumOfNumbers([1]), 1);
  assert.equal(sumOfNumbers([1,2]), 3);
  assert.equal(sumOfNumbers([10, 20, 30]), 60);
}

const selectEverySecondElementTest = function() {
  assert.deepEqual(selectEverySecondElement([1]), [1]);
  assert.deepEqual(selectEverySecondElement([1, 2]), [1]);
  assert.deepEqual(selectEverySecondElement([1, 2, 3]), [1, 3]);
  assert.deepEqual(selectEverySecondElement([1, 2, 3, "aftab", "shaikh"]), [1, 3, 'shaikh']);
}

const greatestNumberFromListTest = function() {
  assert.deepEqual(greatestNumberFromList([1]), 1);
  assert.deepEqual(greatestNumberFromList([1, 45, 13]), 45);
  assert.deepEqual(greatestNumberFromList([1, 45, 13, 90, 98, 1001]), 1001);
}


const mapElementsLengthTest = function() {
  assert.deepEqual(mapElementsLength(["a"]), [1]);
  assert.deepEqual(mapElementsLength(["aftab"]), [5]);
  assert.deepEqual(mapElementsLength(["aftab","shaikh","cksharma","dheeraj"]), [5,6,8,7]);
}
const name = function() {
    return 0;
}

findEvenNumbersTest();
findOddNumbersTest();
sumOfNumbersTest();
selectEverySecondElementTest();
greatestNumberFromListTest();
mapElementsLengthTest();
