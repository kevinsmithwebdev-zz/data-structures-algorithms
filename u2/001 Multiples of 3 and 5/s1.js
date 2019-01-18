export const mult25 = num => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (!(i%3) || !(i%5)) {
      sum += i;
    };
  }
  return sum;
}

console.log(mult25(10))