var logTime = require('./logTime.js');

function radixSort(arr, maxDigit = 2) {
	var mod = 10;
  var dev = 1;
  var counter = [];

	// 每一位排完之后，增加mod的值，以便取得高位数值
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for(var j = 0; j < arr.length; j++) {
    	// 获取该位置上数字，然后放到counter中
      var bucket = parseInt((arr[j] % mod) / dev);
      if(counter[bucket]== null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }

		// 每一次排完之后，重设为新的数组，进入下一高位的遍历
    var pos = 0;
    for(var j = 0; j < counter.length; j++) {
      var value = null;
      if(counter[j]!=null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
}

function radix(arr) {
	radixSort(arr, 7);
}


var len = 10000000;
var testArr = Array(len).fill().map(_ => Math.floor(Math.random() * len));

logTime(radix, '基数排序', testArr);
