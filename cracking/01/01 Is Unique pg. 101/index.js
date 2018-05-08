// Solution with data structure
// time: O(n)
// space: O(n)
const hasUnique = (str) => {
  let arr = []
  for (let i=0; i<str.length; i++) {
    if (arr.indexOf(str[i])!== -1)
      return false
    arr.push(str[i])
  }
  return true
}

// // Solution without data structure
// // time: O(n^2)
// // space: O(1)
// const hasUnique = (str) => {
//   for (let i=0; i<str.length-1; i++) {
//     for (let j=i+1; j<str.length; j++) {
//       if (str[i]===str[j])
//         return false
//     }
//   }
//   return true
// }

const testArr = [
  "lkjsdf",
  "d",
  "jsdfks",
  "ssjdf",
  "asdfll",
  "asdfa"
]

for (let k=0; k<testArr.length; k++) {
  console.log('***', testArr[k], hasUnique(testArr[k]))
}
