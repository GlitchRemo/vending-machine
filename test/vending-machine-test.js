const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");
const assert = testing.assert;
const assertObjectEqual = testing.assertObjectEqual;
const printHeadline = testing.printHeadline;
const showTestSummary = testing.showTestSummary;
const countCoins = vendingMachine.countCoins;
const countCoinsByDenominations = vendingMachine.countCoinsByDenominations;

const testCountCoins = function(){
  printHeadline("testCountCoins()");
  printHeadline("fixed denominations");
  assert(0, countCoins(0, [1]), "for no given amount, machine should return nothing");
  assert(4, countCoins(4, [1]), "for denomination of 1, number of coins equal to amount should be vended");
  assert(2, countCoins(3, [1, 2]), "for denominations upto 2, 2 coins should be vended for an amount of Rs.3");
  assert(3, countCoins(8, [1, 2, 5]), "for denominations upto 5, 3 coins should be vended for Rs. 8");
  assert(4, countCoins(18, [1, 2, 5, 10]), "for denominations upto 10, 4 coins should be vended for Rs. 18");

  printHeadline("ordered denominations");
  assert(0, countCoins(1, []), "for no given denomination, machine should give nothing");
  assert(0, countCoins(12, [13]), "for denomination of 13, no coin should be vended for Rs. 12");
  assert(1, countCoins(14, [13]), "for denomination of 13, 1 coin should be vended for Rs. 13");
  assert(2, countCoins(5, [1, 4]), "for denominations of [1, 4], two coins should be vend for Rs. 5");

  printHeadline("unordered denominations");
  assert(3, countCoins(12, [7, 1, 4]), "for denominations of [7, 1, 4], 3 coins should be vended");
}

const testCountCoinsByDenominations = function() {
  printHeadline("testCountCoinsByDenominations()");
  assertObjectEqual({}, countCoinsByDenominations(0, [1, 2]), "for no given amount, machine should vend nothing");
  assertObjectEqual({2: 1, 1: 1}, countCoinsByDenominations(3, [1, 2]), "1 coin of Re.1 and 1 coin of Rs.2 equals to Rs.3");
  assertObjectEqual({7: 1, 4: 1, 1: 2}, countCoinsByDenominations(13, [1, 7, 4]), "1 coin of Rs.7, 1 of Rs.4, 2 of Re.1 is equal to Rs. 13");
}

const testDriver = function() {
  testCountCoins();
  testCountCoinsByDenominations();
}

testDriver();
showTestSummary();
