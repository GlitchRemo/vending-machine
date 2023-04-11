const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");
const assert = testing.assert;
const determineCoins = vendingMachine.determineCoins;

const runTest = function(){
  assert(0,determineCoins(0),"zero coin of Re.1 equals to zero rupee");
  assert(1,determineCoins(1),"one coin of Re.1 equals to one rupee");
  assert(8,determineCoins(8),"eight coins of Re.1 equals to eight rupees");
}

runTest();
testing.showTestSummary();
