function logTime(fun, sortName, arr) {
	var startTime = Date.now();
	fun(arr);
	var endTime = Date.now();

	console.log(sortName, ' 运行时间为：', endTime - startTime, '\n');
}

module.exports = logTime;
