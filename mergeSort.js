var logTime = require('./logTime.js');

function mergeSort(arr) {
	var len = arr.length;
	if(len < 2) {
    return arr;
  }

	var middle = Math.floor(len / 2);
	var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	var result = [];
  while (left.length && right.length) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
  }

  return result.concat(left, right);
}

var len = 1000000;
var testArr = Array(len).fill().map(_ => Math.floor(Math.random() * len));

logTime(mergeSort, '归并排序', testArr);
