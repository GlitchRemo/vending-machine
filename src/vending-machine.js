const determineNumberOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const dispenseCoins = function(rupees, denominations) {
  const denominationsInDescOrder = denominations.reverse();

  let amount = rupees;
  let coins = 0;
  for(let currentDenomination of denominationsInDescOrder) {

    coins = coins + determineNumberOfCoins(amount, currentDenomination);
    amount = amount % currentDenomination;
  }

  return coins;
}

exports.dispenseCoins = dispenseCoins;
