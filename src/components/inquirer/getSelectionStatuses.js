/**
 * Determines which options were selected and which were not selected.
 * @function
 * @public
 * @param {string[]} options - Array contains all possible selection options.
 * @param {string[]} selection - Array contains only selected options.
 * @returns {boolean[]} - Representation of selected options,
 * 'true' means that option was selected, 'false' means that option was not selected.
 */
export default options => selection => options.map(option => selection.includes(option));
