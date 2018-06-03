function stairRunner(steps) {
	let arr = [1, 2, 4]

	if (steps<=3)
		return arr[steps]

	for (let i=4; i<steps; i++) {
		arr.push(arr[i-2]+arr[i-3]+arr[i-4])
	}
	console.log(arr)
	return arr[steps-1]
}


console.log(stairRunner(10))
