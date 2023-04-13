const determineNumberOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const max = function(list) {
  let max = -Infinity;
  for(item of list) {
    max = Math.max(item, max); 
  }
  return max;
}

const maxSort = function(list) {
  let copiedList = list;
  let sortedList = [];

  for(let index = 0; index < list.length; index++) {
    let maxItem = max(copiedList);
    let maxIndex = copiedList.indexOf(maxItem);
    sortedList.push(maxItem);
    copiedList = copiedList.slice(0,maxIndex).concat(copiedList.slice(maxIndex + 1, copiedList.length));
  }

  return sortedList;
}

const dispenseCoins = function(rupees, denominations) {
  const denominationsInDescOrder = maxSort(denominations.slice());

  let amount = rupees;
  let coins = 0;
  for(let currentDenomination of denominationsInDescOrder) {

    coins = coins + determineNumberOfCoins(amount, currentDenomination);
    amount = amount % currentDenomination;
  }

  return coins;
}

exports.maxSort = maxSort;
exports.max = max;
exports.dispenseCoins = dispenseCoins;
