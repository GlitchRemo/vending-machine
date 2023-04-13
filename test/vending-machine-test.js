const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");
const assert = testing.assert;
const assertArrayEqual = testing.assertArrayEqual;
const printHeadline = testing.printHeadline;
const dispenseCoins = vendingMachine.dispenseCoins;
const maxSort = vendingMachine.maxSort;
const max = vendingMachine.max;

const runTestForDispenseCoins = function(){
  printHeadline("runTestForDispenseCoins()");
  assert(0,dispenseCoins(0,[1]),"zero coin equals to zero rupee");
  assert(1,dispenseCoins(1,[1]),"one coin of Re.1 equals to one rupee");
  assert(2,dispenseCoins(3,[1,2]),"one coin of Re.1 and one coin of Rs.2 equals to three rupees");
  assert(2,dispenseCoins(4,[1,2]),"two coins of Rs.2 equals to four rupees");
  assert(3,dispenseCoins(8,[1,2,5]),"one coin of Rs.5, one coin of Rs.2 and one coin of Re.1 equals to eight rupees");
  assert(1,dispenseCoins(10,[1,2,5,10]),"one coin of Rs.10 equals to ten rupees");
  assert(3,dispenseCoins(13,[1,2,5,10]),"one coin of Rs.10, one coin of Rs.2 and one coin of Re.1 equals to thirteen rupees");
  assert(3,dispenseCoins(21,[1,2,5,10]),"two coins of Rs.10 and one coin of Re.1 equals to twenty one rupees");
  assert(6,dispenseCoins(21,[1,4]),"five coins of Rs.4 and one coin of Re.1 equals to twenty one rupees");
  assert(1,dispenseCoins(14,[13]),"if only 13 is our denomination , for an amount of Rs.14 I will get one coin");
  assert(0,dispenseCoins(12,[13]),"if only 13 is our denomination , for an amount of Rs.12 I will get no coin");
  assert(4,dispenseCoins(13,[1,4,7]),"one coin of Rs.7 , one coin of Rs.4 and two coins of Re.1 is equal to thirteen rupees");
  assert(4,dispenseCoins(13,[4,1,7]),"one coin of Rs.7 , one coin of Rs.4 and two coins of Re.1 is equal to thirteen rupees");
  assert(6,dispenseCoins(23,[2,1,5]),"one coin of Rs.7 , one coin of Rs.4 and two coins of Re.1 is equal to thirteen rupees");
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

const runTestForDriver = function() {
  runTestForDispenseCoins();
}

const runTestForHelper = function() {
  runTestForMaxSort();
  runTestForMax();
}

runTestForDriver();
runTestForHelper();
testing.showTestSummary();
