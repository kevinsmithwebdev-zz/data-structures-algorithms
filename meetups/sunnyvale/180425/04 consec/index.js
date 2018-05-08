const arr1 = [1,2,3,4,4,4,4,6,10]
const arr2 = [2,5,6,7,7,8,8,8,8,8,9,10]

function consecutiveSameElems(arr) {
	let count = 1
  let curCount = 1
  let curElement = arr[0]

  if (arr.length===0)
    return 0

  for (let i=1; i<arr.length; i++) {
    if (arr[i]===arr[i-1])
      curCount++
    else {
      count = Math.max(count, curCount)
      curCount = 1
    }
  }
  return count
}

console.log(consecutiveSameElems(arr1))
console.log(consecutiveSameElems(arr2))
