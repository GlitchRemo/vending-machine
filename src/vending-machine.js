const arrayUtils = require("./array-utils.js");
const maxSort = arrayUtils.maxSort;

const countNumberOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const countCoinsByDenominations = function(rupees, denominations) {
  const coinsByDenomination = {};
  let amount = rupees;

  const denominationsInDescOrder = maxSort(denominations.slice());

  for(let currentDenomination of denominationsInDescOrder) {
    coinsByDenomination[currentDenomination] = countNumberOfCoins(amount, currentDenomination);
    amount = amount % currentDenomination;
  }

  return coinsByDenomination;
}

const countCoins = function(rupees, denominations) {
  const coinsByDenomination = countCoinsByDenominations(rupees, denominations);
  const coinsList = Object.values(coinsByDenomination);
  let coins = 0;

  for(let coin of coinsList) {
    coins += coin;
  }

  return coins;
}

exports.countCoins = countCoins;
exports.countCoinsByDenominations = countCoinsByDenominations;
