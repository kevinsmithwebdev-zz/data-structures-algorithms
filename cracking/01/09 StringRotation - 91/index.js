
const zeroMatrix = matrix => {
  let rNum = matrix.length
  let cNum = matrix[0].length

  let rSet = new Set()
  let cSet = new Set()

  for (let r=0; r<rNum; r++) {
    for (let c=0; c<cNum; c++) {
      if (matrix[r][c]===0) {
        rSet.add(r)
        cSet.add(c)
      }
    }
  }
  for (let r=0; r<rNum; r++) {
    for (let c=0; c<cNum; c++) {
      if (rSet.has(r) || cSet.has(c)) {
        matrix[r][c]=0
      }
    }
  }
  return matrix
}

//*************

const testArr = [
  {
    matrix: [
      [ 1, 1, 1 ],
      [ 1, 1, 1 ],
      [ 1, 0, 1 ]
    ],
    exp: [
      [ 1, 0, 1 ],
      [ 1, 0, 1 ],
      [ 0, 0, 0 ]
    ]
  },
  {
    matrix: [
      [ 1, 1, 1, 1 ],
      [ 1, 0, 1, 1 ],
      [ 1, 1, 1, 1 ],
      [ 1, 1, 1, 1 ]
    ],
    exp: [
      [ 1, 0, 1, 1 ],
      [ 0, 0, 0, 0 ],
      [ 1, 0, 1, 1 ],
      [ 1, 0, 1, 1 ]
    ]
  },
  {
    matrix: [
      [ 1,  0,  1,  1,  1, 1 ],
      [ 1,  1,  1,  1,  1, 1 ],
      [ 1,  1,  0,  1,  0, 1 ],
      [ 1,  1,  1,  1,  1, 1 ]
    ],
    exp: [
      [ 0,  0,  0,  0,  0, 0 ],
      [ 1,  0,  0,  1,  0, 1 ],
      [ 0,  0,  0,  0,  0, 0 ],
      [ 1,  0,  0,  1,  0, 1 ]
    ]
  },

]

const compare = (m1, m2) => JSON.stringify(m1)===JSON.stringify(m2)

for (let i=0; i<testArr.length; i++) {
// for (let i=0; i<1; i++) {
  let res = zeroMatrix(testArr[i].matrix)
  let success = compare(testArr[i].exp, res)
  console.log(`${success}`)
}

function outMat(matrix) {
  console.log('[')
  for (let r of matrix) {
    console.log('  ', JSON.stringify(r))
  }
  console.log(']')
}
