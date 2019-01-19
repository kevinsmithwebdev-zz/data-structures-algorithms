const sumEvenFib = (num) => {
  let sum = 0;
  let cur = 1;
  let prev = 1;
  while (cur < num) {
    if (cur % 2 === 0) {
      sum += cur;
    }
    const hold = cur;
    cur += prev;
    prev = hold;
  }
  return sum;
};

export default sumEvenFib;
