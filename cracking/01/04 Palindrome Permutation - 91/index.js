const paliPerm = str => {
  let arr = str.replace(/\W/g, '').toLowerCase().split('').sort()
  let solos = 0

  for (let i=0; i<arr.length; i++) {
    if (i === arr.length-1) {
      solos++
    }
    if (solos>1) {
      return false
    }
    if (arr[i] === arr[i+1]) {
      i++
    }
    else {
      solos++
    }
    // if (solos > 1)
    //   return false
  }
  return true
}



const testArr = [
  { str: "kKlaLpA", exp: true },
  { str: "able was I Ere I saw Elba", exp: true },
  { str: "hjfkahsdxasd asksssdjasdf", exp: false },
  { str: "raCe Car", exp: true },
  { str: "A man, a plan, a canal: Panama!", exp: true },
  { str: "A", exp: true },
  { str: "", exp: true },
  { str: "an", exp: false }
]

for (let i=0; i<testArr.length; i++) {
  console.log(`testing : ${testArr[i].str}, expect: ${testArr[i].exp}, returned: ${paliPerm(testArr[i].str)}`)
}
