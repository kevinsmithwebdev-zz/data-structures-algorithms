const stringCompression = str => {

  if (str.len<2)
    return str
  let answer = [str[0]]
  let count = 1
  let current = str[0]

  for (let i=1; i<str.length; i++) {
    if (str[i]===current) {
      count++
    } else {
      answer.push(count)
      current = str[i]
      answer.push(current)
      count = 1
    }
  }
  answer.push(count)
  answer = answer.join('')

  return (answer.length<=str.length)?answer:str

}



const testArr = [
  { str: "aaaabbbbcc", exp: "a4b4c2" },
  { str: "abbxxxxxyyy", exp: "a1b2x5y3" },
  { str: "abc", exp: "abc" },
  { str: "a", exp: "a" },
  { str: "", exp: "" },
]

for (let i=0; i<testArr.length; i++) {
  let res = stringCompression(testArr[i].str)
  let success = testArr[i].exp === res
  console.log(`${success} --- testing : ${testArr[i].str}, expect: ${testArr[i].exp}, returned: ${res}`)
}
