function sumSquareDifference(num) {
	var sumSqrd = 0;
	var sqrdSum = 0;
	for (var i =1; i < num+1; i++) {
		sumSqrd += i;
		sqrdSum += i*i;
	}
	sumSqrd *= sumSqrd;
	return Math.abs(sumSqrd-sqrdSum);
}
console.log(sumSquareDifference(100));