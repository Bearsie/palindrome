/** ************************************** TypeDefs ***************************************** */
/**
 * A number that is a positive integer and is equal or grather than 2.
 * @typedef {number} AllowedNumber
 */

/**
 * Object containing two properties that specifies the beginning/end of the range.
 * @typedef {Object} OrderedRange
 * @property {number} lowest - Specifies the beginning of the given range.
 * @property {number} highest - Specifies the end of the given range.
 */

/**
 * Object containing PositiveInteger values given by User, which indicate range of numbers,
 * for which prime numbers will be designated.
 * @typedef {Object} GivenRange
 * @property {AllowedNumber} - First number given by User.
 * @property {AllowedNumber} - Second number given by User.
 */
/** ************************************** End TypeDefs ***************************************** */

/**
 * Function that specifies which one of two values provided by User should be:
 * - the begining of the range
 * - the end of the range.
 * @private
 * @function
 * @param {GivenRange} range - Object containing two numbers provided by User.
 * @returns {OrderedRange} - Object specifying ordered range.
 */
const setInOrder = (range) => {
  const start = Object.values(range)[0];
  const end = Object.values(range)[1];

  return start > end
    ? { highest: start, lowest: end }
    : { highest: end, lowest: start };
};

/**
 * Function that returns number incremented by 1.
 * @name increment
 * @private
 * @function
 * @param {number} current
 * @returns {number}
 */
const increment = (current) => current + 1;
/**
 * Function that returns number decremented by 1.
 * @name decrement
 * @private
 * @function
 * @param {number} current
 * @returns {number}
 */
const decrement = (current) => current - 1;

/**
 * Function that returns array of numbers for a given range of numbers.
 * @name getNumbers
 * @public
 * @function
 * @param {AllowedNumber} - First number given by User.
 * @param {AllowedNumber} - Second number given by User.
 * @param {boolean} [sortAscending=false] - Specifies how numbers will be sorted.
 * @returns {number[]} Array of numbers.
 */
export default function getNumbers(firstNumber, secondNumber, sortAscending = false) {
  /**
   * @type {OrderedRange}
   * @constant
   */
  const { lowest, highest } = setInOrder({ firstNumber, secondNumber });
  /**
   * @type {number}
   * @constant
   */
  const initialNumber = sortAscending ? lowest : highest;
  /**
   * @type {function}
   * @constant
   */
  const getNextNumber = sortAscending ? increment : decrement;
  /**
   * @type {number}
   * @constant
   */
  const numbersAmount = (highest - lowest) + 1;
  const arrayOfNumbers = [initialNumber];

  while (arrayOfNumbers.length < numbersAmount) {
    const currentLastNumber = arrayOfNumbers[arrayOfNumbers.length - 1];
    const nextNumber = getNextNumber(currentLastNumber);
    arrayOfNumbers.push(nextNumber);
  }

  return arrayOfNumbers;
}

/**
 * Function that returns array of numbers for a given range of numbers.
 * @name getNumbersSortedAscending
 * @public
 * @function
 * @param {AllowedNumber} - First number given by User.
 * @param {AllowedNumber} - Second number given by User.
 * @returns {number[]} Array of numbers.
 */
export const getNumbersSortedAscending = (firstNumber, secondNumber) =>
  getNumbers(firstNumber, secondNumber, true);

/**
 * Function that returns array of numbers for a given range of numbers.
 * @name getNumbersSortedDescending
 * @public
 * @function
 * @param {AllowedNumber} - First number given by User.
 * @param {AllowedNumber} - Second number given by User.
 * @returns {number[]} Array of numbers.
 */
export const getNumbersSortedDescending = (firstNumber, secondNumber) =>
  getNumbers(firstNumber, secondNumber, false);
