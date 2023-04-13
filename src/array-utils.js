const getMaxEntry = function(numbers) {
  if(numbers.length === 0) return {index: undefined, item: undefined};

  const maxEntry = {index: 0, item: numbers[0]};

  for(let index = 0; index < numbers.length; index++) {
    if(numbers[index] > maxEntry.item) {
      maxEntry.item = numbers[index];
      maxEntry.index = index;
    }
  }

  return maxEntry;
}

const maxSort = function(numbers) {
  let remaining = numbers.slice();
  let sortedList = [];

  for(let index = 0; index < numbers.length; index++) {
    const maxEntry = getMaxEntry(remaining);
    let maxItem = maxEntry.item;
    let maxIndex = maxEntry.index;
    sortedList.push(maxItem);
    remaining.splice(maxIndex, 1);
  }

  return sortedList;
}

exports.getMaxEntry = getMaxEntry;
exports.maxSort = maxSort;
