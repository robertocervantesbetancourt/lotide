const middle = function(arr) {
  let middleArr = [];
  let middleVal = 0;
  if (arr.length === 1 || arr.length === 2) {
    console.log(middleArr);
    return;
  }
  if (arr.length % 2 === 0) {
    middleVal = arr.length / 2;
    middleArr.push(arr[middleVal - 1]);
    middleArr.push(arr[middleVal]);
    console.log(middleArr);
    return;
  } else {
    middleVal = arr.length / 2;
    middleArr.push(arr[Math.floor(middleVal)]);
    console.log(middleArr);
    return;
  }
};

