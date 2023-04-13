const testing = require("../lib/testing.js");
const arrayUtils = require("../src/array-utils.js");
const sigma = arrayUtils.sigma;
const maxSort = arrayUtils.maxSort;
const getMaxEntry = arrayUtils.getMaxEntry;
const assert = testing.assert;
const assertArrayEqual = testing.assertArrayEqual;
const assertObjectEqual = testing.assertObjectEqual;
const printHeadline = testing.printHeadline;
const showTestSummary = testing.showTestSummary;

const testSigma = function() {
  printHeadline("testSigma()");
  assert(0, sigma([]), "sigma of an empty list is zero");
  assert(1, sigma([1]), "sigma of a singleton set should be the number itself");
  assert(6, sigma([1, 2, 3]), "sigma of n natural numbers should be n(n+1)/2");
}

const testMaxSort = function() {
  printHeadline("testMaxSort()");
  assertArrayEqual([],maxSort([]),"sorted order of an empty set should be nothing");
  assertArrayEqual([1],maxSort([1]),"sorted order of one element should be the element itself");
  assertArrayEqual([4, 4, 2],maxSort([4, 2, 4]),"set of all positive integers");
  assertArrayEqual([4, 1, -2],maxSort([4, -2, 1]),"set including negative integers");
  assertArrayEqual([0.4, 0.1],maxSort([0.4, 0.1]),"set of decimals");
}

const testGetMaxEntry = function() {
  printHeadline("testGetMaxEntry()");
  assertObjectEqual({index: undefined, item: undefined}, getMaxEntry([]), "max of an empty list should be nothing");
  assertObjectEqual({index: 0, item: 1}, getMaxEntry([1]), "max of a singleton set should be the element itself");
  assertObjectEqual({index: 1, item: 2}, getMaxEntry([1, 2, 2]), "set of all positive integers");
  assertObjectEqual({index: 1, item: -2}, getMaxEntry([-3, -2, -4]), "set of all negative integers");
  assertObjectEqual({index: 0, item: 0.2}, getMaxEntry([0.2, 0.1, -0.4]), "set of decimals");
}

testSigma();
testGetMaxEntry();
testMaxSort();
showTestSummary();
