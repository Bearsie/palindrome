import applyFiltersToValues from './applyFiltersToValues';
import getNumbers from './getNumbers';
import getAllPalindromes from './getAllPalindromes';
import getUniquePalindrome from './getUniquePalindrome';

/** ************************************** TypeDefs ***************************************** */
/**
 * Object containing palindrome value and two numbers from which it was designated.
 * @typedef {Object} Palindrome
 * @property {number} result - Found palindrome.
 * @property {number[]} valueOne - Array of first components of found palindrome (first of two values that makes found palindrome).
 * @property {number[]} valueTwo - Array of second components of found palindrome (second of two values that makes found palindrome).
 */

/**
 * Object containing result of palindromes calculation.
 * @typedef {Object} PalindromeCalculation
 * @property {Palindrome} largestPalindrome
 * @property {Palindrome} smallestPalindrome
 * @property {Palindrome[]} allPalindromes
 */
/** ************************************** End TypeDefs ***************************************** */

/**
 * Curried function that ends with designated palindrome.
 * @function
 * @public
 * @param {string} selectedPalindromeType - Type of palindrome that will be calculated.
 * @returns {function}
 */
export default (selectedPalindromeType) => {
  /**
   * Function that converts palindrome type into boolean/null.
   * @function
   * @private
   * @param {string} type - Type of palindrome that will be calculated.
   * @returns {(boolean|null)} - 'true' - 'Largest' or any value,
   *                             'false' - 'Smallest',
   *                             'null' - 'All'
   */
  const wantedPalindromeType = ((type) => {
    if (type === 'largest') return true;
    if (type === 'smallest') return false;
    if (type === 'all') return null;
    return true;
  })(selectedPalindromeType);
  /**
   * Specifies how numbers will be sorted.
   * @type {boolean}
   * @constant
   */
  const sortedAscending = !wantedPalindromeType;
  /**
   * @param {number} rangeFrom - start of given range
   * @param {number} rangeTo - end of given range
   * @returns {function}
   */
  return (rangeFrom, rangeTo) => {
    /**
     * All numbers that are within given range,
     * sorted accordingly(ascending or descending) depending on the value of 'sortedAscending'.
     * @type {number[]}
     * @constant
     */
    const numbers = getNumbers(rangeFrom, rangeTo, sortedAscending);
    /**
     * @param {boolean[]} selectedFilters - Filters that will be applied for every number.
     * @returns {function}
     */
    return (selectedFilters) => {
      /**
       * All numbers that passed through selected filters.
       * @type {number[]}
       * @constant
       */
      const filteredNumbers = applyFiltersToValues(selectedFilters)(numbers);
      /**
       * @param {function} calcPattern - Function that specify rules of calculating palindromes.
       * @returns {PalindromeCalculation} - Designated palindrome/s.
       */
      return (calcPattern) => {
        if (wantedPalindromeType === null) {
          return getAllPalindromes(filteredNumbers, calcPattern);
        }
        return getUniquePalindrome(filteredNumbers, calcPattern, wantedPalindromeType);
      };
    };
  };
};
