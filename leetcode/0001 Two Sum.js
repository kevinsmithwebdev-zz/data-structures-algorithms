/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++ ) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const twoSum = (nums, target) => {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let sum = sortedNums[i] + sortedNums[j];
  while (sum !== target) {
    sum > target ? j-- : i++;
    sum = sortedNums[i] + sortedNums[j];
  }

  return [nums.indexOf(sortedNums[i]), nums.lastIndexOf(sortedNums[j])];
};

const nums = [3,2,4];
const target = 6;
console.log(twoSum(nums, target));
