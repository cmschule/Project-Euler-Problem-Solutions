function wordNumbers(num) {
	num = Math.floor(num);
	var singleArray = ["one","two","three","four","five","six", "seven", "eight", "nine"];
	var doubleArray = ["twenty","thirty", "forty", "fifty", "sixty","seventy", "eighty", "ninety"];
	var teenArray = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	var word = "";

	if (num/1000 >= 1){
		word = wordNumbers(num/1000) + " thousand"+" ";
		num = num%1000;
	}
	if (num/100 >= 1){
		word += wordNumbers(num/100) + " hundred"+" ";
		num = num%100;
		if (num != 0){
			word += "and "
		}
	}
	if (num/10 >= 1){
		var tens = Math.floor((num/10));
		if (tens>1){
			word += doubleArray[tens-2]+" "+wordNumbers(num%10);
			return word;
		}
		else{
			return word += teenArray[num%10];
		}
	}
	else if (num >= 1){
		word += singleArray[num-1];
	}
	else if (num != 0){
		console.log("Invalid input!")
	}
	return word
}

function wordCount(word){
	return word.replace(/[^a-z]/g, "").length;
}


var sum = 0;
for (var i=1000; i>0; i--){
	sum += wordCount(wordNumbers(i));
}

console.log(sum);
