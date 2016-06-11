function collatz(num) {
	
	var maxCounter = 0;
	var collatzNum;
	var counter;
	for (var i = num-1; i>1; i--) {
		collatzNum = i;
		counter = 0;
		while (collatzNum > 1) {
			if (collatzNum%2 == 0) {
				collatzNum = collatzNum/2;
			}
			else {
				collatzNum = 3*collatzNum+1;
			}
			counter++;

		}
		if (counter>maxCounter) {
			maxCounter = counter;
			max = i;
		}
	}
	return max

}

console.log(collatz(1000000))
