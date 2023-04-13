const arrayUtils = require("./array-utils.js");
const maxSort = arrayUtils.maxSort;
const sigma = arrayUtils.sigma;

const countNumberOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const countCoinsByDenominations = function(amount, denominations) {
  if (amount === 0) return {};

  const coinsByDenomination = {};
  let remaining = amount;

  const denominationsInDescOrder = maxSort(denominations.slice());

  for(let currentDenomination of denominationsInDescOrder) {
    coinsByDenomination[currentDenomination] = countNumberOfCoins(remaining, currentDenomination);
    remaining = remaining % currentDenomination;
  }

  return coinsByDenomination;
}

const countCoins = function(amount, denominations) {
  const coinsByDenomination = countCoinsByDenominations(amount, denominations);
  const coins = Object.values(coinsByDenomination);
  return sigma(coins);
}

exports.countCoins = countCoins;
exports.countCoinsByDenominations = countCoinsByDenominations;
