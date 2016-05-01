function triangleNumberDivisor(divNum) {

	var triangleNumFound = false;
	var count = 1;
	var triangleNum = 0;
	var divisors = 0;;
	while (divisors < divNum) {
		triangleNum += count;
		divisors = 4;
		if (triangleNum%2 === 0) {
			for (var i = 3; i <= Math.sqrt(triangleNum); i++) {
				if (triangleNum%i===0) {
					divisors += 2;
				}
			}
		}
		count++;
	}
	return triangleNum;
}

console.log(triangleNumberDivisor(500));