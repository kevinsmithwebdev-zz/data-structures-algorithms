const oneAway = (str1, str2) => {
  if (str1===str2)
    return true

  let diffLen = Math.abs(str1.length-str2.length)
  if (diffLen>1)
    return false

  let diffs = 0
  if (diffLen===0) {
    for (let i=0; i<str1.length; i++) {
      if (str1[i]!==str2[i]) {
        if (++diffs>1)
          return false
      }
    }
    return true
  }

  // if diffLen === 1

  if (str1.length>str2.length) {
    let holder = str1
    str1 = str2
    str2 = str1
  }

  let i1 = 0
  let i2 = 0

  while (i1<str1.length && i2<str2.length) {
    if (str1[i1]!==str2[i2]) {
      diffs++
      i2++
    }
    i1++
    i2++
  }

  return diffs <= 1
}



const testArr = [
  { str1: "apple", str2: "apple", exp: true },
  { str1: "apple", str2: "aple", exp: true },
  { str1: "apple", str2: "appple", exp: true },
  { str1: "apple", str2: "applx", exp: true },
  { str1: "apple", str2: "appxx", exp: false },
  { str1: "apple", str2: "appplE", exp: false },
  { str1: "appleasdfasdf", str2: "appple", exp: false },
]

for (let i=0; i<testArr.length; i++) {
  console.log(`testing : ${testArr[i].str1} and ${testArr[i].str2}, expect: ${testArr[i].exp}, returned: ${oneAway(testArr[i].str1,testArr[i].str2)}`)
}
