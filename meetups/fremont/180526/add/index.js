function add(arr, target) {
	let arr2 = arr.slice().sort((a, b) => a-b)
	let start = 0
	let end = arr2.length - 1

	while (start!==end) {
		let contender = arr2[start] + arr2[end]
		if (contender === target) {
			return [arr.indexOf(arr2[start]), arr.indexOf(arr2[end])]
		}
		if (contender > target)
			end--
		else
			start++
	}
	return [-1, -1]
}


let testArr = [1, 9, 10]
let target = 8
//
// let testArr = [1, 6, -5, 7, 3]
// let target = -2
console.log(add(testArr, target))
