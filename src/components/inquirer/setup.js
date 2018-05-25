const QUESTIONS = [
  {
    name: 'valueOne',
    type: 'input',
    message: 'Enter first value defining the range of numbers (valueOne):',
    default: '20000',
    validate(value) {
      // with "===" does not work corectly
      // eslint-disable-next-line
      if (value > 0 && Math.floor(value) == value) {
        return true;
      }
      return "You need to provide a number that's an integer and it's equal or grather than 2.";
    },
  },
  {
    name: 'valueTwo',
    type: 'input',
    message: 'Enter second value defining the range of numbers (valueTwo):',
    default: '40000',
    validate(value) {
      // eslint-disable-next-line
      if (value > 0 && Math.floor(value) == value) {
        return true;
      }
      return "You need to provide a number that's an integer and it's equal or grather than 2.";
    },
  },
  {
    name: 'selectedFilters',
    type: 'checkbox',
    choices: ['none', 'evens', 'odds', 'primes', 'palindromes'],
    message: 'Select filter/s that will be applied for all numbers:\n',
    default: ['primes'],
  },
  {
    name: 'calcPattern',
    type: 'input',
    message: 'Provide a formula for calculating palindrome (e.g: valueOne + valueTwo):',
    default: 'valueOne * valueTwo',
  },
  {
    name: 'selectedPalindromeTypes',
    type: 'checkbox',
    choices: ['largest', 'smallest', 'all'],
    message: 'Select type/s of palindrome that will be designated:\n',
    default: ['largest'],
  },
];

const [questionAboutFilters] = QUESTIONS.filter(question => question.name === 'selectedFilters');
const FILTER_OPTIONS = questionAboutFilters.choices;

const [questionAboutPalindromeType] = QUESTIONS.filter(question => question.name === 'selectedPalindromeTypes');
const PALINDROME_TYPES = questionAboutPalindromeType.choices;

const [questionAboutValueOne] = QUESTIONS.filter(question => question.name === 'valueOne');
const [questionAboutValueTwo] = QUESTIONS.filter(question => question.name === 'valueTwo');

export {
  FILTER_OPTIONS,
  PALINDROME_TYPES,
  QUESTIONS,
  questionAboutValueOne,
  questionAboutValueTwo,
};
