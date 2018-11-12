import { expect } from 'chai';
import calculatePalindrome from '../../../src/components/palindromes/calculatePalindrome';

const numbersToCompare = [43, 41, 37, 31, 29, 23, 19, 17, 13, 11];
const mainNumber = 43;

const calcPatternMultiply = (x, y) => x * y;
const calcPatternAddition = (x, y) => x + y; // 22 = 11 + 31 , 44 = 13 + 31, 66 = 23 + 43 oraz 29 + 37
// eslint-disable-next-line
const alwaysIsMet = (result) => true;
// eslint-disable-next-line
const alwaysIsNotMet = (result) => false;

describe('calculatePalindrome', () => {
  it("should return 'null' when all numbers were compared.", () => {
    const currentPalindromeComparisonCriterion = alwaysIsNotMet;
    const lastConsecutiveExeceeded = numbersToCompare.length;

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcPatternMultiply,
      currentPalindromeComparisonCriterion,
      lastConsecutiveExeceeded,
    )).to.be.null;
  });

  it("should return 'null' when did not find palindrome.", () => {
    const currentPalindromeComparisonCriterion = alwaysIsNotMet;
    const numbersToCompareWithNoPalindrome = new Array(numbersToCompare.length).fill(11);

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompareWithNoPalindrome,
      calcPatternMultiply,
      currentPalindromeComparisonCriterion,
    )).to.be.null;
  });

  it("should return 'null' when current palindrome comparison criterion is met.", () => {
    const currentPalindromeComparisonCriterion = alwaysIsMet;

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcPatternMultiply,
      currentPalindromeComparisonCriterion,
    )).to.be.null;
  });

  it('should return object with expected properties when find palindrome.', () => {
    const currentPalindromeComparisonCriterion = alwaysIsNotMet;

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcPatternMultiply,
      currentPalindromeComparisonCriterion,
    )).to.have.all.keys('result', 'valueOne', 'valueTwo');
  });

  it(`should return main value that were used to designate the palindrome
      when found palindrome.`, () => {
    const currentPalindromeComparisonCriterion = alwaysIsNotMet;

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcPatternMultiply,
      currentPalindromeComparisonCriterion,
    ).valueOne).to.deep.equal([43]);
  });

  it(`should return one of numbers to compare that were used
      to designate the palindrome when found palindrome.`, () => {
    const currentPalindromeComparisonCriterion = alwaysIsNotMet;

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcPatternMultiply,
      currentPalindromeComparisonCriterion,
    ).valueTwo).to.deep.equal([23]);
  });

  it('should return the highest palindrome.', () => {
    const currentPalindromeComparisonCriterion = alwaysIsNotMet;
    const highestPalindrome = 989; // 121 = 11 * 11, 323 = 17 * 19, 989 = 43 * 23

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcPatternMultiply,
      currentPalindromeComparisonCriterion,
    ).result).to.deep.equal(highestPalindrome);
  });

  it('should use given calcPattern (eg. x * y) to calculate palindrome.', () => {
    const currentPalindromeComparisonCriterion = alwaysIsNotMet;
    const result = calcPatternMultiply(mainNumber, 23); // palindrome: 989 = 43 * 23

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcPatternMultiply,
      currentPalindromeComparisonCriterion,
    ).result).to.equal(result);
  });

  it('should use given calcPattern (eg. x + y) to calculate palindrome.', () => {
    const currentPalindromeComparisonCriterion = alwaysIsNotMet;
    const result = calcPatternAddition(mainNumber, 23); // palindrome: 66 = 43 + 23

    expect(calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcPatternAddition,
      currentPalindromeComparisonCriterion,
    ).result).to.equal(result);
  });
});
