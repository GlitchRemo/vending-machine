const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");
const assert = testing.assert;
const determineOptimumNumberOfCoins = vendingMachine.determineOptimumNumberOfCoins;

const runTest = function(){
  assert(0,determineOptimumNumberOfCoins(0),"zero coin equals to zero rupee");
  assert(1,determineOptimumNumberOfCoins(1),"one coin of Re.1 equals to one rupee");
  assert(2,determineOptimumNumberOfCoins(3),"one coin of Re.1 and one coin of Rs.2 equals to three rupees");
  assert(2,determineOptimumNumberOfCoins(4),"two coins of Rs.2 equals to four rupees");
  assert(1,determineOptimumNumberOfCoins(10),"one coin of Rs.10 equals to ten rupees");
  assert(3,determineOptimumNumberOfCoins(13),"one coin of Rs.10, one coin of Rs.2 and one coin of Re.1 equals to thirteen rupees");
  assert(3,determineOptimumNumberOfCoins(21),"two coins of Rs.20 and one coin of Re.1 equals to twenty one rupees");
}

runTest();
testing.showTestSummary();
