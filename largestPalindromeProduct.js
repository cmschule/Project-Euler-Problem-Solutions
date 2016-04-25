function isPalindrome(number) {
	var numString = String(number);
	var numStringLen = numString.length
	for (var i = 0; i <= Math.floor(numStringLen/2); i++) {
		if (numString[i] === numString[numStringLen-1-i]) {
			if (i === Math.floor(numStringLen/2)) {
				return true;
			}
		}
		else {
			return false;
		}
	}
}

function largestPalindromeProduct(num) {
	var number = 0;
	var max = 0;
	for (var i = 0; i<num; i++) {
		number += 9*Math.pow(10,i);
	}
	for (var j = number; j > 99; j--) {
		for (var k = j; k > 99; k--) {
			if (isPalindrome(j*k) && j*k > max) {
				max = j*k;
				break;
			}
		}
	}
	return max;
}

console.log(largestPalindromeProduct(3));
