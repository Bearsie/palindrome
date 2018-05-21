export const QUESTIONS = [
  {
    name: 'valueOne',
    type: 'input',
    message: 'Enter first value defining the range of numbers (valueOne):',
  },
  {
    name: 'valueTwo',
    type: 'input',
    message: 'Enter second value defining the range of numbers (valueTwo):',
  },
  {
    name: 'selectedFilters',
    type: 'checkbox',
    choices: ['none', 'evens', 'odds', 'primes', 'palindromes'],
    message: 'Select filter/s that will be applied for all numbers:\n',
  },
  {
    name: 'calcFunction',
    type: 'input',
    message: 'Provide a formula for calculating palindrome (e.g: valueOne + valueTwo):',
  },
  {
    name: 'selectedPalindromeTypes',
    type: 'checkbox',
    choices: ['largest', 'smallest', 'all'],
    message: 'Select type/s of palindrome that will be designated:\n',
  },
];
