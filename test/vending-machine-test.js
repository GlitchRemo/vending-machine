const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

testing.assert(1,vendingMachine.dummy(),"true");
testing.assert(0,vendingMachine.dummy(),"true");
testing.showTestSummary();
