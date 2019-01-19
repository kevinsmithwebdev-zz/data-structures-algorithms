const mult35 = num => {
  let nums = new Set();
  for (let i = 0; i < num; i += 3) {
    nums.add(i);
  }

  for (let i = 0; i < num; i += 5) {
    nums.add(i);
  }
  // let sum = 0
  // nums.forEach(n => sum += n);
  // return sum;
  return Array.from(nums).reduce((a, c) => a + c);
};

export default mult35;
