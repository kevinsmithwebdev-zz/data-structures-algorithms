const smallestMultiple = (num) => {
  let primeFactor = 2;
  let targetNum = num;
  const primesArr = [2];
  const factors = [];

  const newPrimeFactor = (pf) => {
    let candidatePrime = pf;
    while (candidatePrime < num) {
      let isPrime = true;
      candidatePrime += 1;
      for (let p; p < primesArr.length; p += 1) {
        if (candidatePrime % p === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primesArr.push(candidatePrime)
      }
      return candidatePrime;
    }
    return null;
  };

  while (primeFactor !== targetNum) {
    if (targetNum % primeFactor === 0) {
      targetNum /= primeFactor;
      factors.push(primeFactor);
    } else {
      primeFactor = newPrimeFactor(primeFactor);
    }
  }
  console.log('factors', factors);
  const prod = factors.reduce((c, a) => c * a);
  console.log('prod', prod)
  return primeFactor;
};

console.log(smallestMultiple(10));
