function setMatrixToZero(matrix) {
  let answer = new Array(matrix.length).fill(new Array(matrix[0].length).fill(0))

  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix.length; j++) {
      console.log(matrix[j][i])
    }

  }

  return answer
}

console.log(setMatrixToZero([
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1]
]))
