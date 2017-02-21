function logTime(fun, sortName, arr) {
	var startTime = Date.now();
	fun(arr);
	var endTime = Date.now();

	console.log(sortName, ' 运行时间为：', endTime - startTime);
	console.log('数组排序结果为正序？：', testArr(arr), '\n');
}

function testArr(arr) {
	const isSort = arr.every((val, index, arr) => {
		if (index === arr.length - 1) return true;
		else return val <= arr[index + 1];
	});

	return isSort;
}

module.exports = logTime;
