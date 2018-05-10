const urlify = (str) => str.split('').map(c => (c===' ')?'%20':c).join('')

const testArr = [
  "test",
  "This is a test",
  "double  space",
  " "
]

for (let i=0; i<testArr.length; i++) {
  console.log(`*** #1#${testArr[i]}#1# #2#${urlify(testArr[i])}#2#`)
}
