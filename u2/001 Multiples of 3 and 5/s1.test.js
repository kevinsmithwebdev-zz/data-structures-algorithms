import { mult35 } from './s1';

const answers = [
  { num: 10, answer: 23 },
];

describe('mult35', () => {
  it('should work for all tests', () => {
    expect(1).toBe(3);
    answer.forEach(test => {
      expect(mult35(test.num)).toBe(test.answer);
    });
  });
});