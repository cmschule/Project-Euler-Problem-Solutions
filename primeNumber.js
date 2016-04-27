function primeNumber(primePosition) {
	var count = 6;
	var num = [2, 3, 5, 7, 11, 13];
	var currentNum = 13;
	while (count < primePosition) {
		currentNum += 2;
		for (var i = 0; i < num.length; i++) {
			if (currentNum%num[i] === 0) {
				break;
			}
			else if (i === num.length-1) {
				num.push(currentNum)
				count++;
			}
		}
	}
	return num[num.length-1];
}

console.log(primeNumber(10001));
