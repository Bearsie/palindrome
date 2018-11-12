import calculatePalindrome from './calculatePalindrome';
import { getNumbersSortedAscending } from './getNumbers';
/**
 * Object containing palindrome value and two numbers from which it was designated.
 * @typedef {Object} Palindrome
 * @property {number} result - Found palindrome.
 * @property {number[]} valueOne - Array of first components of found palindrome (first of two values that makes found palindrome).
 * @property {number[]} valueTwo - Array of second components of found palindrome (second of two values that makes found palindrome).
 */

/**
 * A number that is an integer.
 * @typedef {number} Integer
 */

/**
 * Curried function that takes two params and checks if first param is smaller than second param.
 * @function
 * @private
 * @param {number} first
 * @returns
 *   @function
 *   @param {number} second
 *   @returns {boolean} 'true' if first param is smaller than second param, 'false' otherwise
 */
const firstOfTwoIsLower = (first) => (second) => first < second;
/**
 * Curried function that takes two params and checks if first param is larger than second param.
 * @function
 * @private
 * @param {number} first
 * @returns
 *   @function
 *   @param {number} second
 *   @returns {boolean} 'true' if first param is larger than second param, 'false' otherwise
 */
const firstOfTwoIsHigher = (first) => (second) => first > second;
/**
 * Function that checks if it's last iteration
 * @function
 * @param {Integer} step - Iteration counter
 * @returns {boolean} - 'true' - when it's last iteration, 'false' otherwise
 */
const lastStep = (step, amountOfSteps) => step === amountOfSteps - 1;

const getSteps = (allNumbers) => {
  const numbersAmountForSingleStep = 100;
  const amountOfSteps = getNumbersSortedAscending(0, Math.floor(allNumbers.length / numbersAmountForSingleStep));
  const startIndex = (step, index) => (numbersAmountForSingleStep * step) + index;
  const endIndex = (step, index) => startIndex(step, index) + numbersAmountForSingleStep;

  return {
    amountOfSteps,
    startIndex,
    endIndex,
  };
};

const computePalindrome = ({
  allNumbers,
  startIndex,
  endIndex,
  index,
  amountOfSteps,
  number,
  calcPattern,
  comparisonCriterion,
}) => (currentPalindrome, step) => {
  const currentPalindromeResult = currentPalindrome.result;
  const comparingValues = lastStep(step, amountOfSteps)
    ? allNumbers.slice(startIndex(step, index))
    : allNumbers.slice(startIndex(step, index), endIndex(step, index));
  /**
   * @type {Palindrome}
   * @constant
   */
  const newPalindrome = calculatePalindrome(
    number,
    comparingValues,
    calcPattern,
    comparisonCriterion(currentPalindromeResult),
  );

  if (newPalindrome) {
    const { result, valueOne, valueTwo } = newPalindrome;
    /**
     * @type {boolean}
     * @constant
     */
    const resultMeetsComparisonCriterion = comparisonCriterion(result)(currentPalindromeResult);

    if (resultMeetsComparisonCriterion) {
      return newPalindrome;
    }

    if (result === currentPalindromeResult) {
      return {
        result: currentPalindrome.result,
        valueOne: currentPalindrome.valueOne.concat(valueOne),
        valueTwo: currentPalindrome.valueTwo.concat(valueTwo),
      };
    }
  }

  return currentPalindrome;
};

const computePalindromeInStepsUsing = (calcPattern, comparisonCriterion) =>
  (palindrome, number, index, allNumbers) => {
    const calculationSteps = getSteps(allNumbers);
    const { amountOfSteps, startIndex, endIndex } = calculationSteps;

    return amountOfSteps.reduce(computePalindrome({
      number,
      index,
      allNumbers,
      amountOfSteps,
      startIndex,
      endIndex,
      calcPattern,
      comparisonCriterion,
    }), palindrome);
  };

/**
 * Function that calculate palindrome using tail call optimization.
 * @public
 * @function
 * @param {number[]} numbers - Array containing values of second param used in calculation of palindrome.
 * @param {function} calcPattern - Function that specify how palindrome will be calculated.
 * @param {boolean} getLargest - Type of palindrome that will be calculated, 'true' - largest, 'false' - smallest.
 * @returns {null|Palindrome} 'null' when palindrome does not exist, 'Palindrome' palindrome exists.
 */
export default (numbers, calcPattern, getLargest) => {
  /**
   * @type {Object}
   * @constant
   */
  const INITIAL_PALINDROME = {
    result: getLargest ? 1 : Number.MAX_SAFE_INTEGER,
  };
  /**
   * @type {function}
   * @constant
   */
  const comparisonCriterion = getLargest ? firstOfTwoIsHigher : firstOfTwoIsLower;

  const uniquePalindrome = numbers.reduce(
    computePalindromeInStepsUsing(calcPattern, comparisonCriterion),
    INITIAL_PALINDROME,
  );

  if (uniquePalindrome === INITIAL_PALINDROME) {
    return null;
  }

  return uniquePalindrome;
};
