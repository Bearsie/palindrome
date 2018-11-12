import calculatePalindrome from './calculatePalindrome';
/**
 * Object containing palindrome value and two numbers from which it was designated.
 *
 * @typedef {Object} Palindrome
 * @property {number} result - Found palindrome.
 * @property {number[]} valueOne - Array of first components of found palindrome (first of two values that makes found palindrome).
 * @property {number[]} valueTwo - Array of second components of found palindrome (second of two values that makes found palindrome).
 */

/**
 * Object that agregates Palindromes in such that its properties are Palindromes values which contains Palindrome.
 *
 * @typedef {Object} AgregatedPalindromes
 * @property {Palindrome} - Property name is variable and matches Palindrome value.
 * @example
 * const agregatedPalindrome= {
 *   121: {
 *     result: 121,
 *     valueOne: [11],
 *     valueTwo: [11],
 *   },
 *   252: {
 *     result: 252,
 *     valueOne: [12, 14],
 *     valueTwo: [21, 18],
 *   }
 * };
 */

/**
 * A number that is an integer.
 *
 * @typedef {number} Integer
 */

/**
 * Function that calculate palindromes using tail call optimization.
 *
 * @public
 * @function
 * @param {number[]} numbers - Array containing values of second param used in calculation of palindromes.
 * @param {function} calcNewPalindrome - Function that specify how palindromes will be calculated.
 * @returns {null|Palindrome[]} 'null' when palindromes does not exist, array of 'Palindrome' otherwise.
 */
export default (numbers, calcNewPalindrome) => {
  /**
   * Function that checks if it's last iteration
   * @function
   * @param {Integer} step - Iteration counter
   * @returns {boolean} - 'true' - when it's last iteration, 'false' otherwise
   */
  const lastStep = (step, amountOfSteps) => step === amountOfSteps - 1;
  /**
   * Function used for sorting Palindromes ascending.
   *
   * @function
   * @param {Palindrome} previous - Previous palindrome from array collection.
   * @param {Palindrome} next - Next palindrome from array collection.
   * @returns {number} - Sort indicator.
   */
  const ascending = (previous, next) => previous.result - next.result;
  /**
   * Function used for agregating Palindromes along with merging repeating values. Components of repeating Palindromes are merged in single array.
   *
   * @function
   * @param {AgregatedPalindromes} agregatedPalindromes - Object that contains agregated Palindromes.
   * @param {Palindrome} palindrome - Consecutive palindrome from array collection.
   * @returns {AgregatedPalindromes} - Object that contains agregated Palindromes.
   */
  const mergeRepeatingResultsInAgregatedObject = (agregatedPalindromes, palindrome) => {
    const previousPalindrome = agregatedPalindromes[palindrome.result];
    if (
      previousPalindrome
      && palindrome.result === previousPalindrome.result
    ) {
      return Object.assign(
        agregatedPalindromes,
        {
          [palindrome.result]: {
            result: palindrome.result,
            valueOne: [...previousPalindrome.valueOne, ...palindrome.valueOne],
            valueTwo: [...previousPalindrome.valueTwo, ...palindrome.valueTwo],
          },
        },
      );
    }

    return Object.assign(
      agregatedPalindromes,
      { [palindrome.result]: palindrome },
    );
  };

  const runCalculations = ({
    number,
    index,
    allNumbers,
    calculationMethod,
    palindromeComparisonCriterion = undefined,
    numbersAmountForSingleStep = 100, // in order to not grow the stack too much we split calculation into steps
  }) => {
    /**
     * @type {Integer}
     * @constant
     */
    const amountOfSteps = Math.ceil(allNumbers.length / numbersAmountForSingleStep);
    /**
     * @type {Palindrome[]}
     */
    const palindromes = [];

    for (let step = 0; step < amountOfSteps; step += 1) {
      /**
       * @type {Integer}
       * @constant
       */
      const startIndex = numbersAmountForSingleStep * step;
      /**
       * @type {Integer}
       * @constant
       */
      const endIndex = numbersAmountForSingleStep * (step + 1);
      /**
       * @type {number[]}
       * @constant
       */
      const comparingValues = lastStep(step, amountOfSteps)
        ? allNumbers.slice(startIndex + index)
        : allNumbers.slice(startIndex + index, endIndex + index);
      /**
       * @type {Palindrome}
       * @constant
       */
      const newPalindrome = calculatePalindrome(
        number,
        comparingValues,
        calculationMethod,
        palindromeComparisonCriterion,
      );

      if (newPalindrome) {
        palindromes.push(newPalindrome);
      }
    }

    return palindromes;
  };

  const allPalindromes = numbers.reduce(
    (palindromes, number, index, allNumbers) => palindromes.concat(runCalculations({
      number,
      index,
      allNumbers,
      calculationMethod: calcNewPalindrome,
    })),
    [],
  );

  if (allPalindromes.length === 0) {
    return null;
  }

  return Object.values(allPalindromes
    .sort(ascending)
    .reduce(mergeRepeatingResultsInAgregatedObject, {}));
};
