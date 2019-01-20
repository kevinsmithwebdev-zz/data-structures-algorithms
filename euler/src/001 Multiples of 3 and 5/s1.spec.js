import fs from 'fs';
import { expect } from 'chai';

// import mult35 from './s1';

const fileMatcher = new RegExp(/^s\d*\.js$/);

const testName = __dirname.split('/src/')[1];

console.log('__dirname', __dirname);
console.log('testName', testName);

const answers = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 3],
  [5, 3],
  [6, 8],
  [7, 14],
  [8, 14],
  [9, 14],
  [10, 23],
  [11, 33],
  [12, 33],
  [13, 45],
  [14, 45],
  [15, 45],
  [16, 60],
  [20, 78],
  [30, 195],
  [40, 368],
  [50, 543],
  [60, 810],
  [70, 1133],
  [80, 1428],
  [90, 1845],
  [100, 2318],
  [1000, 233168],
];

const performTest = (filename) => {
  it(`should work for solution ${filename}`, async () => {
    await import(`./${filename}`)
      .then(solution =>
        answers.forEach(test => expect(solution(test[0])).to.be.eq(test[1]))
      );
  });
};

fs.readdir(__dirname, (err, solutions) => {
  describe(`the test for "${testName}"...`, () => {
    solutions
      .filter(filename => fileMatcher.test(filename))
      .forEach(filename => performTest(filename));
  });
});
