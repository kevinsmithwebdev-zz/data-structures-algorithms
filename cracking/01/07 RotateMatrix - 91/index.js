function outMat(matrix) {
  console.log('[')
  for (let r of matrix) {
    console.log('  ', JSON.stringify(r))
  }
  console.log(']')
}

const rotateMatrix = matrix => {
  let idxMax = matrix.length-1
  let mid = Math.ceil(idxMax/2)
  for (let ring=0; ring<mid; ring++) {
    for (let i=ring; i<idxMax-ring; i++) {
      let holder1
      let holder2
      //
      holder1 = matrix[ring+i][idxMax-ring]
      matrix[ring+i][idxMax-ring] = matrix[ring][ring+i]

      holder2 = matrix[idxMax-ring][idxMax-i-ring]
      matrix[idxMax-ring][idxMax-i-ring] = holder1
      holder1 = holder2

      holder2 = matrix[idxMax-ring-i][ring]
      matrix[idxMax-ring-i][ring] = holder1

      matrix[ring][ring+i] = holder2
    }
  }
  return matrix
}

//*************

const testArr = [
  {
    matrix: [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ],
    exp: [
      ['g', 'd', 'a'],
      ['h', 'e', 'b'],
      ['i', 'f', 'c']
    ]
  },
  {
    matrix: [
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g', 'h'],
      ['i', 'j', 'k', 'l'],
      ['m', 'n', 'o', 'p']
    ],
    exp: [
      ['m', 'i', 'e', 'a'],
      ['n', 'j', 'f', 'b'],
      ['o', 'k', 'g', 'c'],
      ['p', 'l', 'h', 'd']
    ]
  },
  {
    matrix: [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'j'],
      ['k', 'l', 'm', 'n', 'o'],
      ['p', 'q', 'r', 's', 't'],
      ['u', 'v', 'w', 'x', 'y']
    ],
    exp: [
      ['u', 'p', 'k', 'f', 'a'],
      ['v', 'q', 'l', 'g', 'b'],
      ['w', 'r', 'm', 'h', 'c'],
      ['x', 's', 'n', 'i', 'd'],
      ['y', 't', 'o', 'j', 'e']
    ]
  },

]

const compare = (m1, m2) => JSON.stringify(m1)===JSON.stringify(m2)

for (let i=0; i<testArr.length; i++) {
  let res = rotateMatrix(testArr[i].matrix)
  let success = compare(testArr[i].exp, res)
  console.log(`${success}`)
}

// console.log(rotateMatrix(testArr[0].matrix))
