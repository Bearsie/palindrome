import isPalindrome from '../filters/isPalindrome';
/**
 * Object containing palindrome value and two numbers from which it was designated.
 * @typedef {Object} Palindrome
 * @property {number} result - Found palindrome.
 * @property {number[]} valueOne - Array of first components of found palindrome (first of two values that makes found palindrome).
 * @property {number[]} valueTwo - Array of second components of found palindrome (second of two values that makes found palindrome).
 */

/**
 * A function that, for a given array of numbers, sets the largest (smallest) number in the array with
 * the remaining ones smaller or equal (larger or equal) than it, and uses the given pattern for calculating the palindrome
 * and checks whether the designated number is larger (smaller) that current highest (lowest) palindrome.
 * If so, then it checks whether the designated number is a palindrome.
 * If so, it returns this number and the two numbers that were used to designate the palindrome.
 * If not it performs a recursive call and sets largest (smallest) number in the array with the next number of the array.
 * If performed all recursive calls and dose not designated palindrome it returns 'null'.
 * @name calculatePalindrome
 * @public
 * @function
 * @param {number} mainNumber - The largest (smallest) number in the array of numbers used in
 * the formula for calculating the palindrome. Throughout the calculation process, it remains unchanged.
 * @param {number[]} numbersToCompare - An array containing all numbers that are used with the highest (lowest) number
 * in the palindrome calculation process.
 * @param {function} calcNewPalindrome - Function that specify how palindrome will be calculated.
 * @param {function} currentPalindromeMeetsComparisonCriterionWith - Comparative criterion for calculated result,
 * depending on the type of palindrome we want to designate.
 * @param {number} [consecutive=0] - Accumulator for recursive call of 'calculatePalindrome' function.
 * It represents the index of consecutive number that will be used with the highest (lowest) number
 * in the palindrome calculation process. By default is equal 0.
 * @returns {null|Palindrome|function} 'null' when palindrome does not exist,
 * 'Palindrome' when result is palindrome, 'function' call itself with accumulator increased by 1.
 */
export default function calculatePalindrome(
  mainNumber,
  numbersToCompare,
  calcNewPalindrome,
  currentPalindromeMeetsComparisonCriterionWith = () => false,
  consecutive = 0,
) {
  if (consecutive < numbersToCompare.length) {
    /**
     * @type {number}
     * @constant
     */
    const result = calcNewPalindrome(mainNumber, numbersToCompare[consecutive]);

    if (!Number.isInteger(result)) {
      throw new Error(`Function that specifies how to calculate palindrome is invalid.
      Please note, that it must always return an integer`);
    }

    if (currentPalindromeMeetsComparisonCriterionWith(result)) {
      return null;
    }

    if (isPalindrome(result)) {
      return { result, valueOne: [mainNumber], valueTwo: [numbersToCompare[consecutive]] };
    }

    return calculatePalindrome(
      mainNumber,
      numbersToCompare,
      calcNewPalindrome,
      currentPalindromeMeetsComparisonCriterionWith,
      consecutive + 1,
    );
  }

  return null;
}
