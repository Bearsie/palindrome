/**
 * A number that is an integer.
 * @typedef {number} AllowedNumber
 */

/**
 * Function that check if given number is prime.
 * @public
 * @function
 * @param {AllowedNumber} number - Number to check.
 * @returns {boolean} 'true' if given number is prime, 'false' otherwise.
 */
export default (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  // Any integer can be described as: (6k + i) where:
  // k = 0,1,...infinity and i = −1, 0, 1, 2, 3 or 4
  // (6k + 0) % 2 is always 0
  // (6k + 2) % 2 is always 0
  // (6k + 4) % 2 is always 0
  // (6k + 3) % 3 is always 0
  if (number % 2 === 0 || number % 3 === 0) return false;
  // So we need to check only remaining: (6k - 1) and (6k + 1).
  // The highest possible divider of given number resulting division into two integer numbers
  // must be always less or equal than the root of the given number, eg. 13 x 13 = 169.
  // Next divider will be always given number itself.
  // We want to exclude integers that divide given number into two numbers.
  let divisor = 5; // starting from k = 1 => (6 * 1 - 1)

  while (divisor * divisor <= number) {
    if (number % divisor === 0 || number % (divisor + 2) === 0) return false;
    divisor += 6;
  }

  return true;
};
