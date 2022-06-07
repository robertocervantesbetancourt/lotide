const middle = function(arr) {
  let middleArr = [];
  let middleVal = 0;
  if (arr.length === 1 || arr.length === 2) {
    return middleArr;
  }
  if (arr.length % 2 === 0) {
    middleVal = arr.length / 2;
    middleArr.push(arr[middleVal - 1]);
    middleArr.push(arr[middleVal]);
    return middleArr;
  } else {
    middleVal = arr.length / 2;
    middleArr.push(arr[Math.floor(middleVal)]);
    return middleArr;
  }
};

module.exports = middle;


