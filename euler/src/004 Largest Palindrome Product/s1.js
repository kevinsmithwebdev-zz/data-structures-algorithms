const isPalindrome = (num) => {
  const str1 = String(num);
  const str2 = str1.split('').reverse().join('');
  return str1 === str2;
}

const largestPalindromeProduct = (numDigits) => {
  const max = (10 ** numDigits) - 1;
  let largest = 0;
  for (let i = 1; i <= max; i += 1) {
    for (let j = 1; j <= max; j += 1) {
      const prod = i * j;
      if (isPalindrome(prod) && prod > largest) {
        largest = prod;
      }
    }
  }
  return largest;
};

console.log(largestPalindromeProduct(3));

