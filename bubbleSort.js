var logTime = require('./logTime.js');

function bubbleSort(arr) {
	var len = arr.length;

	for (var i = len; i >= 0; i--) {
		for (var j = 0; j <= i; j++) {
			// 将大的元素冒泡到数组的最后
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

// 改进，每次内部冒泡之后，最后面的已经完成排序，因此可以缩小遍历范围
function bubbleSort2(arr) {
	var len = arr.length - 1;

	while(len) {
		var pos = 0;
		// 内部每一次排序后，最后面的位置已经排序好，可以不用在参与比较
		// 所以可以设置i的值，减少复杂度
		for (var j = 0; j <= len; j++) {
			// 将大的元素冒泡到数组的最后
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				pos = j;
			}
		}
		len = pos;
	}
}

var len = 100000;
var testArr = Array(len).fill().map(_ => Math.floor(Math.random() * len));
var testArr2 = testArr.concat([]);

logTime(bubbleSort, '正常的冒泡排序', testArr);
logTime(bubbleSort2, '改进的冒泡排序', testArr2);
