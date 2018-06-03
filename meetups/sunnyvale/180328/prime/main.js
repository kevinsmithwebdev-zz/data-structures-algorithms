function computePrimes(n) {
  let sieve = []
  let answer = n>=2 ? [2] :[]
  let i = 3

  while (i<n) {
    if (!sieve[i]) {
      answer.push(i)
      for (j=i; j<=n; j+=i)
        sieve[j]=true
    }
    i+=2
  }

  return answer
}

console.log(computePrimes(12))
