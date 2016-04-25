function smallestMultiple(divisor) {
	var smallestMultipleNum = 20;
	var isSmallestMultiple = false;
	while (!isSmallestMultiple) {
		smallestMultipleNum += 20;
		for (var i = 1; i < 21; i++) {
			if (smallestMultipleNum%i != 0) {
				break;
			}
			else if (i === 20) {
				isSmallestMultiple = true;
			}
		}
	}
	return smallestMultipleNum;
}

console.log(smallestMultiple(20));