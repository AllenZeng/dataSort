var logTime = require('./logTime.js');

function selectSort(arr) {
	var len = arr.length;

	for (var i = 0; i <= len; i++) {
		var min = i;
		// 查找最小元素的位置
		for (var j = i; j <= len; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}

		if (min !== i) {
			var temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
}

var len = 100000;
var testArr = Array(len).fill().map(_ => Math.floor(Math.random() * len));

logTime(selectSort, '选择排序', testArr);
