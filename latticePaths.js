function latticePaths(gridDim) {
	/**I tried to figure out a way to brute force this but had no such luck.
	I used combinatorics to quickly solve this once I gave up trying to find a brute force method.
	I assume there is way, at the very least with recursion,  but I also think it would take a long time
	to walk through every single path.**/
	return factorial(gridDim[0]+gridDim[1])/(factorial(gridDim[0])*factorial(gridDim[1]))
}

function factorial(num) {
	if (num == 1) {
		return 1
	}
	return num*factorial(num-1)

}

console.log(latticePaths([20,20]));