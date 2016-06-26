function powerSum(base,exp) {
	var num = [1];
	var digit, carry, sum;
	for (var i=0; i<exp; i++){

		carry = 0;

		for (var j=0; j < num.length; j++) {

			digit = 2*num[j] + carry

			if (digit > 9) {
				digit -= 10;
				carry = 1;
			}
			else {
				carry = 0
			}

			num[j] = digit;
		}
		if (carry>0) {
			num.push(carry);
		}

	}
	sum = num.reduce(function(prev, current){
		return prev+current
	})

	return sum
}

console.log(powerSum(2,1000))
