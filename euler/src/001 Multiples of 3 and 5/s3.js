const mult35 = (num) => {
  const memo = new Array(num);

  for (let i = 0; i < num; i += 3) {
    memo[i] = true;
  }

  for (let i = 0; i < num; i += 5) {
    memo[i] = true;
  }

  return memo.reduce(((a, c, i) => (a + c ? i : 0)), 0);
};

// export default mult35;

console.log(mult35(1000))
