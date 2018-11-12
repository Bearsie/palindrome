import { expect } from 'chai';
import getNumbers from '../../../src/components/palindromes/getNumbers';

const firstNumber = 10;
const secondNumber = 20;

describe('getNumbers', () => {
  describe('by default:', () => {
    const defaultSortedNumbers = getNumbers(firstNumber, secondNumber);

    it('should return array sorted descending', () => {
      expect(defaultSortedNumbers).to.deep.equal([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10]);
    });
  });

  describe('when called with third parameter equal "true"', () => {
    const ascendingSortedNumbers = getNumbers(firstNumber, secondNumber, true);

    it('should return array sorted ascending', () => {
      expect(ascendingSortedNumbers).to.deep.equal([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
  });

  describe('when called with third parameter equal "false"', () => {
    const descendingSortedNumbers = getNumbers(firstNumber, secondNumber, false);

    it('should return array sorted descending', () => {
      expect(descendingSortedNumbers).to.deep.equal([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10]);
    });
  });

  describe('regardless of the order of number arguments (first, second) or (second, first)', () => {
    const descendingSortedNumbers = getNumbers(firstNumber, secondNumber);
    const descendingSortedNumbers2 = getNumbers(secondNumber, firstNumber);

    it('should return same array', () => {
      expect(descendingSortedNumbers).to.deep.equal(descendingSortedNumbers2);
    });
  });
});

