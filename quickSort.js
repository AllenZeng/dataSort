var logTime = require('./logTime.js');

function quickSort(arr) {
	function swap(arr, left, right) {
		const temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
	}

	function getProvIndex(arr, left, right) {
		const prov = arr[right];	// 保存基准值
		let provIndex = left;	// 缓存交换的位置

		for (var i = left; i < right; i++) {
			// 遍历区间的元素，小于基准值的，往前交换位置
			if (arr[i] < prov) {
				swap(arr, i, provIndex);
				provIndex++;
			}
		}
		// 最后将基准值交换到中间
		swap(arr, right, provIndex);
		return provIndex;
	}

	function sort(arr, left, right) {
		if (left > right) return;

		const provIndex = getProvIndex(arr, left, right);
		// 不用再处理基准值了，已经到达正确的位置
		sort(arr, left, provIndex - 1);
		sort(arr, provIndex + 1, right)
	}

	sort(arr, 0, arr.length - 1);
}

var len = 1000;
var testArr = Array(len).fill().map(_ => Math.floor(Math.random() * len));

logTime(quickSort, '快速排序', testArr);
