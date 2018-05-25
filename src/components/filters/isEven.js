/**
 * A number that is an integer.
 * @typedef {number} AllowedNumber
 */

/**
 * Function that check if given number is even.
 * @public
 * @function
 * @param {AllowedNumber} number - number to check.
 * @returns {boolean} 'true' if given number is even, 'false' otherwise.
 */
export default (number) => {
  if (number % 2) return false;
  return true;
};
