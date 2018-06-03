function permuteArray(permutation, arr) {
	let answer = []
  for (let i=0; i<p.length; i++)
    answer[p[i]]=arr[i]
  return answer
}


let p = [1, 3, 2, 0]
let a = ['a','b','c','d']
console.log(permuteArray(p, a))
