function pythagoreanTriplet(sum) {
	var b;
	var c;
	for (var a = 1; sum/3; a++) {
		//found by equating a^2+b^2 to (sum-a-b)^2
		b = (-sum*sum+2*sum*a)/(-2*sum+2*a);
		//to check if b is a natural number
		if (b%1 === 0) {
			break;
		}
	}
	c = sum-a-b;
	console.log(a,b,c);
	return a*b*c;
}

console.log(pythagoreanTriplet(1000));