function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var tempTotal = 0;
  for (var i = min;i <= max; i ++){
    tempTotal += i;
  }
  return tempTotal;
}

sumAll([1, 4]);
