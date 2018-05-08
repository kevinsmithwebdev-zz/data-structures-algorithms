const arr1 = [4,5,8]
const k1 = 6
const arr2 = [3,5,9]
const k2 = 10
const arr3 = [3,16,4,7]
const k3 = 12


function countSubarray(numbers, k) {
  count = 0
  for (let i=0; i<numbers.length; i++) {
    let sum = 0
    for (let j=i; j<numbers.length; j++) {
      sum += numbers[j]
      if (sum>=k) {
        break
      }
      count++
    }
  }
  return count
}


console.log(countSubarray(arr1, k1))
console.log(countSubarray(arr2, k2))
console.log(countSubarray(arr3, k3))
