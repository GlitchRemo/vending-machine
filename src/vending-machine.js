const determineNumberOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const determineOptimumNumberOfCoins = function(amount) {
  let coins = 0;

  coins = coins + determineNumberOfCoins(amount, 10);
  amount = amount % 10;

  coins = coins + determineNumberOfCoins(amount, 5);
  amount = amount % 5;

  coins = coins + determineNumberOfCoins(amount, 2);
  amount = amount % 2;

  coins = coins + determineNumberOfCoins(amount, 1);

  return coins;
}

exports.determineOptimumNumberOfCoins = determineOptimumNumberOfCoins;
