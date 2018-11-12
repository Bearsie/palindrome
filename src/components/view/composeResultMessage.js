import chalk from 'chalk';

const getMessagesForComponentsOf = ({ valueOne, valueTwo }) =>
  valueOne.map((value, i) => ` ${chalk.green(value)} and ${chalk.green(valueTwo[i])}`);

const composeMessageForAllPalindromes = (palindromes) => {
  const results = palindromes.reduce((messages, palindrome) =>
    [
      ...messages,
      `${chalk.blue(palindrome.result)} It can be made of:${getMessagesForComponentsOf(palindrome)}`,
    ], []);
  const addOrdinalNumber = (message, count) => `\n${count + 1} palindrome: ${message}`;

  return `Ammount of palindromes: ${chalk.green(results.length)} ${results.map(addOrdinalNumber)}`;
};

const composeMessageForLargestPalindrome = (palindrome) =>
  `Largest palindrome: ${chalk.blue(palindrome.result)} It can be made of:${getMessagesForComponentsOf(palindrome)}`;

const composeMessageForSmallestPalindrome = (palindrome) =>
  `Smallest palindrome: ${chalk.blue(palindrome.result)} It can be made of:${getMessagesForComponentsOf(palindrome)}`;

const composeResultMessage = {
  all: composeMessageForAllPalindromes,
  largest: composeMessageForLargestPalindrome,
  smallest: composeMessageForSmallestPalindrome,
};

export default (palidromes, palindromeType) => (
  palidromes
    ? composeResultMessage[palindromeType](palidromes)
    : chalk.red('No palindromes were found.')
);

