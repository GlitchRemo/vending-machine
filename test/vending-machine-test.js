const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");
const assert = testing.assert;
const assertArrayEqual = testing.assertArrayEqual;
const printHeadline = testing.printHeadline;
const dispenseCoins = vendingMachine.dispenseCoins;
const maxSort = vendingMachine.maxSort;
const max = vendingMachine.max;
const remove = vendingMachine.remove;
const dispenseCoinsByDenominations = vendingMachine.dispenseCoinsByDenominations;

const runTestForDispenseCoins = function(){
  printHeadline("runTestForDispenseCoins()");
  printHeadline("fixed denominations");
  assert(0,dispenseCoins(0,[1]),"zero coin equals to zero rupee");
  assert(1,dispenseCoins(1,[1]),"1 coin of Re.1 equals to 1 rupee");
  assert(2,dispenseCoins(3,[1,2]),"1 coin of Re.1 and 1 coin of Rs.2 equals to three rupees");
  assert(2,dispenseCoins(4,[1,2]),"2 coins of Rs.2 equals to four rupees");
  assert(3,dispenseCoins(8,[1,2,5]),"1 coin of Rs.5, 1 coin of Rs.2 and 1 coin of Re.1 equals to eight rupees");
  assert(1,dispenseCoins(10,[1,2,5,10]),"1 coin of Rs.10 equals to ten rupees");

  printHeadline("ordered denominations");
  assert(3,dispenseCoins(13,[1,2,5,10]),"1 coin of Rs.10, 1 coin of Rs.2 and 1 coin of Re.1 equals to thirteen rupees");
  assert(3,dispenseCoins(21,[1,2,5,10]),"2 coins of Rs.10 and 1 coin of Re.1 equals to twenty 1 rupees");
  assert(6,dispenseCoins(21,[1,4]),"5 coins of Rs.4 and 1 coin of Re.1 equals to twenty 1 rupees");
  assert(1,dispenseCoins(14,[13]),"if only 13 is our denomination, for an amount of Rs.14 I will get 1 coin");
  assert(0,dispenseCoins(12,[13]),"if only 13 is our denomination, for an amount of Rs.12 I will get no coin");

  printHeadline("unordered denominations");
  assert(4,dispenseCoins(13,[1,4,7]),"1 coin of Rs.7, 1 coin of Rs.4 and 2 coins of Re.1 is equal to thirteen rupees");
  assert(4,dispenseCoins(13,[4,1,7]),"1 coin of Rs.7, 1 coin of Rs.4 and 2 coins of Re.1 is equal to thirteen rupees");
  assert(6,dispenseCoins(23,[2,1,5]),"1 coin of Rs.7, 1 coin of Rs.4 and 2 coins of Re.1 is equal to thirteen rupees");
}

const runTestForDispenseCoinsByDenominations = function() {
  printHeadline("runTestForDispenseCoinsByDenominations()");
  assert({2:1, 1:1}[2],dispenseCoinsByDenominations(3,[1,2])[2],"1 coin of Re.1 and 1 coin of Rs.2 equals to three rupees");
  assert({2:1, 1:1}[1],dispenseCoinsByDenominations(3,[1,2])[1],"1 coin of Re.1 and 1 coin of Rs.2 equals to three rupees");
}

const runTestForMaxSort = function() {
  printHeadline("runTestForMaxSort()");
  assertArrayEqual([2,1],maxSort([1,2]),"sorted order of 1,2 is 2,1");
  assertArrayEqual([4,2,1],maxSort([4,1,2]),"sorted order of 4,1,2 is 1,2,4");
}

const runTestForMax = function() {
  printHeadline("runTestForMax()");
  assert(3,max([1,2,3]), "max of 1,2,3 is 3");
  assert(2,max([1,2]), "max of 1,2 is 2");
}

const runTestForRemove = function() {
  printHeadline("runTestForRemove()");
  assertArrayEqual([1,2],remove([1,3,2] ,1),"[1,3,2] without index 1 should be [1,2]");
  assertArrayEqual([1,2,3],remove([1,2,3,4] ,3),"[1,2,3,4] without index 3 should be [1,2,3]");
}

const runTestForDriver = function() {
  runTestForDispenseCoins();
  runTestForDispenseCoinsByDenominations();
}

const runTestForHelper = function() {
  runTestForMaxSort();
  runTestForMax();
  runTestForRemove();
}

runTestForDriver();
runTestForHelper();
testing.showTestSummary();
