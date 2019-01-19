export const mult35 = num => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (!(i%3) || !(i%5)) {
      sum += i;
    };
  }
  return sum;
}

// for (let i = 0; i <= 15; i += 1) {
//   console.log(`[${i}, ${mult35(i)}],`)
// }
console.log(mult35(16))