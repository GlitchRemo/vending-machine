const max = function(list) {
  let max = -Infinity;
  for(item of list) {
    max = Math.max(item, max); 
  }
  return max;
}

const maxSort = function(list) {
  let remainingList = list.slice();
  let sortedList = [];

  for(let index = 0; index < list.length; index++) {
    let maxItem = max(remainingList);
    let maxIndex = remainingList.indexOf(maxItem);
    sortedList.push(maxItem);
    remainingList.splice(maxIndex, 1);
  }

  return sortedList;
}

const determineNumberOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const dispenseCoinsByDenominations = function(rupees, denominations) {
  const coinsByDenomination = {};
  let amount = rupees;

  const denominationsInDescOrder = maxSort(denominations.slice());

  for(let currentDenomination of denominationsInDescOrder) {
    coinsByDenomination[currentDenomination] = determineNumberOfCoins(amount, currentDenomination);
    amount = amount % currentDenomination;
  }

  return coinsByDenomination;
}

const dispenseCoins = function(rupees, denominations) {
  const coinsByDenomination = dispenseCoinsByDenominations(rupees, denominations);
  const coinsList = Object.values(coinsByDenomination);
  let coins = 0;

  for(let coin of coinsList) {
    coins += coin;
  }

  return coins;
}

exports.maxSort = maxSort;
exports.max = max;
exports.dispenseCoins = dispenseCoins;
exports.dispenseCoinsByDenominations = dispenseCoinsByDenominations;
