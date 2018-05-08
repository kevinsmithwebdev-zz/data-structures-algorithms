//
// Given a set of distinct integers, nums,
// return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
//     Input: nums = [1,2,3]
//     Output:
//     [
//       [3],
//       [1],
//       [2],
//       [1,2,3],
//       [1,3],
//       [2,3],
//       [1,2],
//       []
//     ]

const startArr = [1,2,3]
const endArr = [[]]

for (let i=0; i<startArr.length; i++) {
	let endArrLength = endArr.length
	for (let j=0; j<endArrLength; j++) {
		// let tempArr = endArr[j].slice()
		// tempArr.push(startArr[i])
		// endArr.push(tempArr)
		endArr.push([...endArr[j], startArr[i]])
	}
}

console.log('endArr', endArr)

const startArr = [1,2,3]




const endArr = [[]]


// 
// def powerSet(arr):
//
// 	if len(arr) == 0: return [[]]
//
//     ele = arr.pop()
//
//     prevResult = powerSet(arr)
//
//     tempResult = []
//
//     for val in prevResult:
//     	tempResult.append(val.append(ele))
//
//     return prevResult + tempResult
