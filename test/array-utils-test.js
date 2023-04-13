const testing = require("../lib/testing.js");
const arrayUtils = require("../src/array-utils.js");
const maxSort = arrayUtils.maxSort;
const getMaxEntry = arrayUtils.getMaxEntry;
const assertArrayEqual = testing.assertArrayEqual;
const assertObjectEqual = testing.assertObjectEqual;
const printHeadline = testing.printHeadline;

const testMaxSort = function() {
  printHeadline("testMaxSort()");
  assertArrayEqual([],maxSort([]),"sorted order of an empty set should be nothing");
  assertArrayEqual([1],maxSort([1]),"sorted order of one element should be the element itself");
  assertArrayEqual([4, 4, 2],maxSort([4, 2, 4]),"sorted order of [4, 2, 4] should be [4, 4, 2]");
  assertArrayEqual([4, 1, -2],maxSort([4, -2, 1]),"sorted order of [4, -2, 1] should be [4, 1, -2]");
}

const testGetMaxEntry = function() {
  printHeadline("testGetMaxEntry()");
  assertObjectEqual({index: undefined, item: undefined}, getMaxEntry([]), "max of an empty list should be nothing");
  assertObjectEqual({index: 0, item: 1}, getMaxEntry([1]), "max of a singleton set should be the element itself");
  assertObjectEqual({index: 1, item: 2}, getMaxEntry([1, 2, 2]), "max of [1, 2, 2] should be 2");
}

testGetMaxEntry();
testMaxSort();
