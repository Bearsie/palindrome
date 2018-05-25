/**
 * Function that check if given value is palindrome.
 * @public
 * @function
 * @param {(string|number)} value - Value to check.
 * @returns {boolean} 'true' if given value is palindrome, 'false' otherwise.
 */
export default (value) => {
  const strigified = typeof value === 'string' ? value : String(value);
  const reversed = strigified
    .split('')
    .reverse()
    .join('');

  if (strigified === reversed) return true;
  return false;
};
