const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");
const assert = testing.assert;
const determineOptimumNumberOfCoins = vendingMachine.determineOptimumNumberOfCoins;

const runTest = function(){
  assert(0,determineOptimumNumberOfCoins(0),"zero coin of Re.1 equals to zero rupee");
  assert(1,determineOptimumNumberOfCoins(1),"one coin of Re.1 equals to one rupee");
  assert(2,determineOptimumNumberOfCoins(3),"one coin of Re.1 and one coin of Rs.2 equals to three rupees");
  assert(2,determineOptimumNumberOfCoins(4),"two coins of Rs.2 equals to four rupees");
  assert(5,determineOptimumNumberOfCoins(10),"five coins of Rs.2 equals to ten rupees");
}

runTest();
testing.showTestSummary();
