
const isSubstring = (str, sub) => str.indexOf(sub) !== -1

const stringRotation = (str1, str2) => {
  if (str1.length!==str2.length)
    return false
  return isSubstring(str1+str1, str2) && isSubstring(str2+str2, str1)
}

//*************

const testArr = [
  {
    str1: 'abcdefg',
    str2: 'cdefgab',
    exp: true
  },
  {
    str1: 'abcdex',
    str2: 'cdefgb',
    exp: false
  },
  {
    str1: 'aaaa',
    str2: 'aaaaa',
    exp: false
  },
  {
    str1: 'abcdefg',
    str2: 'cdefgb',
    exp: false
  },


]



for (let i=0; i<testArr.length; i++) {
  let res = stringRotation(testArr[i].str1, testArr[i].str2)
  let success = testArr[i].exp === res
  console.log(`Test ${i} succeeded? - ${success?'pass':'fail'}`)
}
