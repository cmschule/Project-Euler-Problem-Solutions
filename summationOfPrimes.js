function summationOfPrimes(primeLimit) {

	function primeNumber(primeMax) {
		var count = 6;
		var num = [2, 3, 5, 7, 11, 13];
		var currentNum = 13;
		while (currentNum < primeMax) {
			currentNum += 2;
			for (var i = 0; i < num.length; i++) {
				if (currentNum%num[i] === 0) {
					break;
				}
				else if (i === num.length-1) {
					num.push(currentNum)
				}
			}
		}
		return num;
	}
	var sum;
	var primeArray = primeNumber(primeLimit);
	sum = primeArray.reduce(function(a,b) {
		return a+b;
	});
	return sum;
}

console.log(summationOfPrimes(2000000));