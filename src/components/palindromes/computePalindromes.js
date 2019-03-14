import findPalindromes from './findPalindromes';

export default ({
  rangeFrom,
  rangeTo,
  filtersToApply,
  selectedPalindromeTypes,
  calcFunction,
}) => selectedPalindromeTypes.map((palindromeType) => ({
  palindromeType,
  palindrome: findPalindromes(palindromeType)(rangeFrom, rangeTo)(filtersToApply)(calcFunction),
}));
