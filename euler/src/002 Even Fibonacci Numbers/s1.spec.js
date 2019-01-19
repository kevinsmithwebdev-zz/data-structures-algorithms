import { expect } from 'chai';
import sumEvenFib from './s1';

const answers = [
  [0, 0],
  [10, 10],
  [50, 44],
  [100, 44],
  [500, 188],
  [1000, 798],
  [5000, 3382],
  [10000, 3382],
  [100000, 60696],
  [1000000, 1089154],
  [4000000, 4613732],
];

describe('sumEvenFib', () => {
  it('should work for all tests', () => {
    answers.forEach(test => expect(sumEvenFib(test[0])).to.be.eq(test[1]));
  });
});
