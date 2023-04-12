const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");
const assert = testing.assert;
const dispenseCoins = vendingMachine.dispenseCoins;

const runTest = function(){
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
}

runTest();
testing.showTestSummary();
