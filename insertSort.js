var logTime = require('./logTime.js');

function insertSort(arr) {
	var len = arr.length;

	for (var i = 0; i < len; i++) {
		var current = arr[i];
		var cursor = i;
		// 对比当前元素与前面的元素一个一个对比，然后移动位置
		while(cursor > 0 && arr[cursor - 1] > current) {
			arr[cursor] = arr[cursor - 1];
			cursor--;
		}
		arr[cursor] = current;
	}
}

function insertSort2(arr) {
	var len = arr.length;

	for (var i = 0; i < len; i++) {
		var current = arr[i];
		var left = 0;
		var right = i - 1;

		// 使用二分查找插入位置
		while(left < right) {
			var middle = parseInt((left + right) / 2);

			if (current < arr[middle]) {
        right = middle - 1;
	    } else {
        left = middle + 1;
	    }
		}
		
		// 找到插入位置，位置之后的元素全部后移一位
		for (var j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    arr[left] = current;
	}
}

var len = 100000;
var testArr = Array(len).fill().map(_ => Math.floor(Math.random() * len));
var testArr2 = testArr.concat([]);

logTime(insertSort, '正常的插入排序', testArr);
logTime(insertSort2, '二分的插入排序', testArr2);