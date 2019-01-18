// Write efficient code for extracting unique elements from a sorted list of
// array.  e.g. (1, 1, 3, 3, 3, 5, 5, 5, 9, 9, 9, 9) -> (1, 3, 5, 9).

const unique = arr => {

  if (arr.length <= 1) {
    return arr.slice()
  }

  const subArr = [ arr[0] ]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]) {
      subArr.push(arr[i])
    }
  }

  return subArr
}

const arr = [1, 3, 5, 5, 5, 9]
console.log(unique(arr))
