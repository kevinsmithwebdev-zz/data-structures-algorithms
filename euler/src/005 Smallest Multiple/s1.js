const smallestMultiple = (num) => {
  const indexConvert = (num) => num - 2;
  const factors = [];

  // set up array of numbers
  const nums = new Array(num - 2);
  for (let i = 2; i <= num; i += 1) {
    nums[indexConvert(i)] = i;
  }

  // find factors

  for (let factor = 2; factor < num / 2; factor += 1) {
    let numTimesUsed = 0;
  }
  return nums;
};

console.log(smallestMultiple(10));
