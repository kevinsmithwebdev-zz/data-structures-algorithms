const isPrime = (n) => {
  const max = Math.sqrt(n);
  for (let i = 2, s = max; i <= s; i += 1) {
    if (n % i === 0) return false;
  }
  return n !== 1 && n !== 0;
};

const largestPrimeFactor = (num) => {
  const max = Math.floor(num / 2);
  for (let i = max; i >= 2; i -= 1) {
    // console.log('checking', i, isPrime(i), num % i === 0);
    if (isPrime(i) && num % i === 0) {
      return i;
    }
  }
  return null;
};

console.log(largestPrimeFactor(600851475143));
