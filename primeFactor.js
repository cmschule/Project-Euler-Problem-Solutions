function primeFactor(num) {
	var prime = 2;
	var factor = num;
	while (prime != factor) {
		if (factor%prime === 0) {
			factor = factor/prime;
			prime = 2;
		}
		else {
			prime ++
		}
	}
	return factor;
}

console.log(primeFactor(600851475143));