const largestPrimeFactor = (num) => {
  let primeFactor = 2;
  let targetNum = num;
  const primesArr = [2];

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
    } else {
      primeFactor = newPrimeFactor(primeFactor);
    }
  }
  return primeFactor;
};

console.log(largestPrimeFactor(600851475143));
