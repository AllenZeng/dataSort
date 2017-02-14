var logTime = require('./logTime.js');

function shellSort(arr) {
	var len = arr.length;
	var temp = null;
	var gap = 1;

	// 动态区间生成
	while(gap < len / 5) {
		gap = gap * 5 + 1;
	}

	for (gap; gap > 0; gap = Math.floor(gap / 5)) {
		for (var i = gap; i < len; i++) {
			temp = arr[i];
			// 按照gap，对元素进行插入排序，循环完一次，调整动态区间
			for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
		}
	}
}

var len = 10000000;
var testArr = Array(len).fill().map(_ => Math.floor(Math.random() * len));

logTime(shellSort, '希尔排序', testArr);
