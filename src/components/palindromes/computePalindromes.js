import findPalindromes from './findPalindromes';

export default (data) => {
  const {
    rangeFrom,
    rangeTo,
    filtersToApply,
    selectedPalindromeTypes,
    calcFunction,
  } = data;

  // const reversedSelectedPalindromeTypes = selectedPalindromeTypes.reverse();

  return selectedPalindromeTypes.map((palindromeType) => (
    {
      palindromeType,
      palindrome: findPalindromes(palindromeType)(rangeFrom, rangeTo)(filtersToApply)(calcFunction),
    }
  ));
};
