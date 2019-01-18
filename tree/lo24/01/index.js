// You're given an array containing both positive and negative integers
// and required to find the subarray with the largest sum (O(N)).

const biggestSub = arr => {
  let max = 0
  let maxUpToHere = 0

  for (let i = 0; i < arr.length; i++) {
    maxUpToHere += arr[i]
    maxUpToHere = Math.max(maxUpToHere, 0)
    if (maxUpToHere > max) {
      max = maxUpToHere
    }
  }
  return max
}



console.log(biggestSub([-2,1,-3,4,-1,2,1,-5,4]))
