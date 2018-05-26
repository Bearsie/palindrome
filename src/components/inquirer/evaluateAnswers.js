import getSelectionStatuses from './getSelectionStatuses';
import getFiltersToApply from './getFiltersToApply';

/** ************************************** TypeDefs ***************************************** */
/**
 * Data that comes from enquirer, containing values provided by user.
 * @typedef {Object} EnquirerAnswers
 * @property {string} valueOne - Start of given range.
 * @property {string} valueTwo - End of given range.
 * @property {string[]} selectedFilters - Contains values of chosen filters.
 * @property {string[]} selectedPalindromeTypes - Contains values of chosen palindromes types.
 * @property {string} calcPattern - Represents body of function that will be calculating palindromes.
 */

/**
 * Selection options specified for enquirer.
 * @typedef {Object} EnquirerOptions
 * @property {string[]} FILTER_OPTIONS - Contains all possible filters choices.
 * @property {string[]} FILTER_FUNCTIONS - Contains all filters functions that corespond with filters choices.
 */

/**
 * Object containing evaluated enquirer inputs that will be used to calculate palindromes.
 * @typedef {Object} PalindromeInputs
 * @property {number} rangeFrom - Start of given range.
 * @property {number} rangeTo - End of given range.
 * @property {boolean[]} activeFilters - Represents selection of filters,
 * 'true' means that certain filter was selected, 'false' otherwise.
 * @property {boolean[]} activePalindromeTypes - Represents selection of palindromes types,
 * 'true' means that certain palindrome type was selected, 'false' otherwise.
 * @property {function} calcFunction - Function evaluated from calc patern that specify rules of calculating palindromes.
 */
/** ************************************** End TypeDefs ***************************************** */

/**
 * Curried function that ends with object containing evaluated enquirer inputs.
 * @function
 * @public
 * @param {EnquirerOptions} constantData - Selection options specified for enquirer.
 * @returns {function}
 */
export default constantData =>
  /**
   * @param {EnquirerAnswers} inputedData - Data that comes from enquirer, containing values provided by user.
   * @returns {PalindromeInputs} - Object containing inputs for palindromes calculation.
   */
  (inputedData) => {
    const { FILTER_OPTIONS, FILTER_FUNCTIONS } = constantData;
    const {
      valueOne,
      valueTwo,
      selectedFilters,
      selectedPalindromeTypes,
      calcPattern,
    } = inputedData;

    const rangeFrom = Number(valueOne);
    const rangeTo = Number(valueTwo);
    /**
     * Representation of selected filters,
     * 'true' means that filter was selected, 'false' means that filter was not selected.
     * @type {boolean[]}
     * @constant
     */
    const activeFilters = getSelectionStatuses(FILTER_OPTIONS)(selectedFilters);
    /**
     * Filtering functions corresponding to the selected filters.
     * @type {function[]}
     * @constant
     */
    const filtersToApply = getFiltersToApply(FILTER_FUNCTIONS)(activeFilters);
    /**
     * Represents body of function that will be used for palindrome calcutalion.
     * @type {string}
     * @constant
     */
    const functionBody = `(valueOne, valueTwo) => ${calcPattern}`;
    /**
     * Evaluated body of function that will be used for palindrome calcutalion.
     * @type {function}
     * @constant
     */
    // eslint-disable-next-line
    const calcFunction = eval(functionBody);

    return {
      rangeFrom,
      rangeTo,
      filtersToApply,
      selectedPalindromeTypes,
      calcFunction,
    };
  };
