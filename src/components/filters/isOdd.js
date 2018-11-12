/**
 * A number that is an integer.
 * @typedef {number} AllowedNumber
 */

/**
 * Function that check if given number is odd.
 * @public
 * @function
 * @param {AllowedNumber} number - number to check.
 * @returns {boolean} 'true' if given number is odd, 'false' otherwise.
 */
export default (number) => !!(number % 2);
