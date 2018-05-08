const matrix1 = [
     [ 0,  1,  7,  8],
     [11, 12, 13, 19],
     [24, 31, 33, 39],
     [40, 41, 42, 56]
   ]
const target1 = 7



const matrix2 = [
     [ 0,  1,  7,  8],
     [11, 12, 13, 19],
     [24, 31, 33, 39],
     [40, 41, 42, 56]
   ]
const target2 = 15

function test(matrix, target) {
  let i
  for (i=0; i<matrix.length; i++) {
    if (matrix[i][0]===target)
      return true
    if (matrix[i][0]>target)
      break
  }

  if (i===0)
    return false
  i--
  for (j=0; j<matrix[i].length; j++) {
    if (matrix[i][j]===target)
      return true
  }
  return false
}



console.log(test(matrix1, target1))
console.log(test(matrix2, target2))
