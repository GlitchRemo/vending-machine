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

const remove = function(list, index) {
  const leftPart = list.slice(0, index);
  const rightPart = list.slice(index + 1, list.length);
  return leftPart.concat(rightPart);
}

const maxSort = function(list) {
  let remainingList = list.slice();
  let sortedList = [];

  for(let index = 0; index < list.length; index++) {
    let maxItem = max(remainingList);
    let maxIndex = remainingList.indexOf(maxItem);
    sortedList.push(maxItem);
    remainingList = remove(remainingList, maxIndex);
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

const dispenseCoinsByDenominations = function(rupees, denominations) {
  const denominationsInDescOrder = maxSort(denominations.slice());
  const denominationsObj = {};

  let amount = rupees;
  for(let currentDenomination of denominationsInDescOrder) {

    denominationsObj[currentDenomination] = determineNumberOfCoins(amount, currentDenomination);
    amount = amount % currentDenomination;
  }

  return denominationsObj;
}

exports.remove = remove;
exports.maxSort = maxSort;
exports.max = max;
exports.dispenseCoins = dispenseCoins;
exports.dispenseCoinsByDenominations = dispenseCoinsByDenominations;
