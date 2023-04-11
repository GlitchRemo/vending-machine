const determineNumberOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const dispenseCoins = function(rupees, denominations) {
  const requiredDenominations = denominations.reverse();

  let amount = rupees;
  let coins = 0;
  for(let currentDenomination of requiredDenominations) {

    coins = coins + determineNumberOfCoins(amount, currentDenomination);
    amount = amount % currentDenomination;
  }

  return coins;
}

exports.dispenseCoins = dispenseCoins;
