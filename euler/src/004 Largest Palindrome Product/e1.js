const isPalindrome = (num) => {
  const str1 = String(num);
  const str2 = str1.split('').reverse().join('');
  return str1 === str2;
};

const largestPalindromeProduct = (numDigits) => {
  const max = (10 ** numDigits) - 1;
  const min = 10 ** (numDigits -1);
  let largest = [0, 0, 0];
  for (let i = min; i <= max; i += 1) {
    for (let j = i; j <= max; j += 1) {
      const prod = i * j;
      if (isPalindrome(prod) && prod > largest[0]) {
        largest = [prod, i, j];
      }
    }
  }

  const len1 = largest[1].toString().length;
  const len2 = largest[2].toString().length;
  let digitsMatch = (len1 === numDigits) && (len2 === numDigits);

  if (!digitsMatch) {
    largest.push('********** fail **********');
  }
  return largest;
};

let count = 0;

while (++count) {
  console.log('num digits =', count, '  answer =', largestPalindromeProduct(count));
}


