const determineNumberOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const determineOptimumNumberOfCoins = function(rupees) {
  const denominations = [10, 5, 2, 1]

  let amount = rupees;
  let coins = 0;
  for(let currentDenominations of denominations) {

    coins = coins + determineNumberOfCoins(amount, currentDenominations);
    amount = amount % currentDenominations;
  }

  return coins;
}

exports.determineOptimumNumberOfCoins = determineOptimumNumberOfCoins;
