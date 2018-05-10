const arePermutations = (str1, str2) => {
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')
  return str1===str2
}


const testArr = [
  [ "asdf", "fdsa", true ],
  [ "asdfa", "fdsa", false ],
  [ "asdfasdf", "dfsafdsa", true ],
  [ "asdf", "asd", false ],
]

for (let i=0; i<testArr.length; i++) {
  console.log(`*** ${testArr[i][0]} ${testArr[i][1]} expected=${testArr[i][2]} actual=${arePermutations(testArr[i][0], testArr[i][1])}`)
}
