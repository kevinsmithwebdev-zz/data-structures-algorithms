function spiralTraversal(arr) {

  const rLen = arr[0].length
  const cLen = arr.length
  let i = 0
  let answer = []

  while (answer.length < (rLen*cLen)) {

    for (let n=i; n<rLen-i; n++) {
      answer.push(arr[i][n])
    }

    if (answer.length === (rLen*cLen))
      break
    for (let e=i+1; e<cLen-i; e++) {
      answer.push(arr[e][rLen-i-1])
    }

    if (answer.length === (rLen*cLen))
      break
    for (let s=rLen-i-1; s>i; s--) {
      answer.push(arr[cLen-i-1][s-1])
    }

    if (answer.length === (rLen*cLen))
      break
    for (let w=cLen-2; w>i; w--) {
      answer.push(arr[w][i])
    }
    i++
  }
  return answer
}

//*************

let tests = [
  {
    input: [
    	[10, 12, 14],
    	[16, 18, 20],
    	[22, 24, 26]
    ],
    output: [10, 12, 14, 20, 26, 24, 22, 16, 18]
  },
  {
    input: [
      [10, 12, 14],
    	[16, 18, 20],
    	[22, 24, 26],
      [28, 30, 32]
    ],
    output: [10, 12, 14, 20, 26, 32, 30, 28, 22, 16, 18, 24]
  },
  {
    input: [
      [10, 12, 14, 15],
    	[16, 18, 20, 21],
    	[22, 24, 26, 27],
      [28, 30, 32, 33]
    ],
    output: [10, 12, 14, 15, 21, 27, 33, 32, 30, 28, 22, 16, 18, 20, 26, 24]
  },
  {
    input: [
      [10, 12],
      [16, 18]
    ],
    output: [10, 12, 18, 16]
  },
  {
    input: [
      [10, 12]
    ],
    output: [10, 12]
  },
  {
    input: [
      [10],
      [16]
    ],
    output: [10, 16]
  },
  {
    input: [
      [10, 12, 14]
    ],
    output: [10, 12, 14]
  },
  {
    input: [
      [10],
      [16],
      [22]
    ],
    output: [10, 16, 22]
  },
  {
    input: [
      [10]
    ],
    output: [10]
  },
  {
    input: [[]],
    output: []
  },
]

let passAll = true
for (let test of tests) {
  let a = spiralTraversal(test.input)
  let b = test.output
  let pass = arrayEqual(a, b)
  console.log('\n\n**********\n\n')
  console.log(a)
  console.log(b)
  console.log("passes:", pass)
  if (!pass)
    passAll = false
}

console.log("\n\n*** Pass all:", passAll)

//***

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false
  for (let i in arr1) {
    if (arr1[i]!==arr2[i])
      return false
  }


  return true
}
