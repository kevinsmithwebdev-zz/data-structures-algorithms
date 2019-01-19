import { expect } from 'chai';
import mult35 from './s1';

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

describe('mult35', () => {
  it('should work for all tests', () => {
    answers.forEach(test => expect(mult35(test[0])).to.be.eq(test[1]));
  });
});
