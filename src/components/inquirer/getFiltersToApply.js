/**
 * Curried function that ends with specifing which functions will be used for filtering numbers.
 * @function
 * @public
 * @param {function[]} allFunctions - All possible functions that can be applied.
 * @returns {function}
 */
export default (allFunctions) =>
  /**
   * @param {boolean[]} selectionStatuses - Contains statuses of selection,
   * 'true' means that option was selected, 'false' means that option was not selected.
   * @returns {function[]} - Functions filtered by possitive selection status.
   */
  (selectionStatuses) => {
    /**
     * Specifies if function should be considered during filtering proccess.
     * @function
     * @private
     * @param {function} func - Subject to filtering proccess.
     * @param {number} index - Number of the function that is subject to the filtering process.
     * @returns {boolean} - 'true' if should be considered during filtering proccess, 'false' otherwise.
     */
    const getPossitiveSelectionStatus = (func, index) => selectionStatuses[index] === true;
    /**
     * Specifies which functions will be used for filtering numbers.
     * @type {function[]}
     * @constant
     */
    const assignedFunctions = allFunctions.filter(getPossitiveSelectionStatus);

    return assignedFunctions;
  };
