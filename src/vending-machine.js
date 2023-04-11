const determineOptimumNumberOfCoins = function(amount) {
  return Math.floor(amount / 2) + amount % 2;
}

exports.determineOptimumNumberOfCoins = determineOptimumNumberOfCoins;
