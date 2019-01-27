const makePrimes = max => {
  console.log('max', max);
  const sieve = new Array(max);
  const maxCheck = max;
  for (let i = 2; i <= maxCheck; i++) {
    console.log('check1', i, sieve)
    if (!sieve[i]) {
      console.log(i, 'is prime')
      for (let j = i * 2; j < max; j += i) {
        console.log(j, 'is a multiple of', i)
        sieve[j] = true
      }
    }
  }
  primes = [];
  console.log('done sieve', sieve);
  for (let i = 0; i < sieve.length; i++) {
    if (!sieve[i]) {
      console.log('i', i);
      primes.push(i);
    }
  }
  console.log('raw primes', primes);
  primes.splice(0, 2);
  return primes;
}

const smallestMultiple = (num) => { 
  // set up array of numbers
  const numbers = new Array(num - 2);
  for (let i = 2 ; i <= num; i += 1) {
    numbers[i - 2] = i;
  }
  const primes = makePrimes(Math.ceil(num/2));
  console.log('primes', primes)
  const factorsArr = [];
  let count = 100
  numbers.forEach(number => {
    const factors = [];
    if (!count--) return;
    for (let i = 0; i < primes.length; i += 1) {
      const factor = primes[i];
      // console.log('factor =', factor);
      let workingNum = number;
      // console.log('testing', (workingNum > factor), (workingNum % factor === 0), 
        // (workingNum > factor && (workingNum % factor === 0)));
      while (workingNum > factor && (workingNum % factor === 0)) {
        if (count-- < 0) return;
        // console.log('workingNum = ', workingNum, factor);
        factors.push(factor);
        workingNum /= factor;
      }
    }
    // console.log('factors', factors)
    factorsArr.push(factors);
  });

  console.log('factorsArr', factorsArr)
  return factorsArr;
};

smallestMultiple(10);
