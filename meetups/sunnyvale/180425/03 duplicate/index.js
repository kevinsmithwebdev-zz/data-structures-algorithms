const i1 = [1,1,2,3,4,5,5]
const i2 = [5,6,7,11,11,11,20,21,21,21,22,23]



// function deleteDuplicate(integers) {
//   let s = new Set(integers)
//   return Array.from(s.values()).length
// }
//
// function deleteDuplicate(integers) {
//   let arr = [integers[0]]
//   for (let i=1; i<integers.length; i++) {
//     if (integers[i]!==integers[i-1])
//       arr.push(integers[i])
//   }
//   return arr.length
// }

function deleteDuplicate(integers) {
  console.log('\n\n\n***************\n\n\n')
  if (integers.length = 0)
    return 0
  let count = 1
  for (let i=1; i<integers.length; i++) {
    if (integers[i]!==integers[i-1]) {
      count++
    }
  }
  return count

}


console.log(deleteDuplicate(i1))
console.log(deleteDuplicate(i2))
