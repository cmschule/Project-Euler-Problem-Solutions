function fibonacci1(N) {
	if (N===1 || N===0) {
		return N;
	}
	return fibonacci(N-1)+fibonacci(N-2);
}

function fibonacci2() {
	var prevFibNum;
	var fibNum = 1;
	var evenSum = 0;
	var lastFibNum = 0;
	while (fibNum<4000000) {
		prevFibNum = fibNum;
		fibNum += lastFibNum;
		lastFibNum = prevFibNum;
		if (fibNum%2===0) {
			evenSum += fibNum;
		}
	}
	return evenSum;
}

console.log(fibonacci2())