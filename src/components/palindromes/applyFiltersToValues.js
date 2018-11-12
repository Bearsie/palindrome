/**
 * Curried function that ends with filtered values.
 * @function
 * @public
 * @param {function[]} filtersToApply - Filters that will be applied for given values.
 * @returns {function}
 */
export default (filtersToApply) =>
  /**
   * @param {number[]} values - Values that will be filtered.
   * @returns {number[]} - Filtred values
   */
  (values) => {
    /**
     * Function that call every filter function with a given value as a parameter
     * and check if every filter return 'true'.
     * @function
     * @private
     * @param {number} value - Value that is filtered.
     * @param {function[]} filters - Filters that will be applied for given value.
     * @returns {boolean} - 'true' if every applied filter return 'true', 'false' otherwise.
     */
    const isFiltered = (value, filters) => filters.every((filter) => filter(value));
    /**
     * Values that went through all filters.
     * @type {number[]}
     * @constant
     */
    const filteredValues = values.filter((value) => isFiltered(value, filtersToApply));

    return filteredValues;
  };
