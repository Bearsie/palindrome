/* eslint-disable no-console */
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import composeResultMessage from './composeResultMessage';

export const logWelcomeMessage = () => {
  clear();
  console.log(chalk.yellow(figlet.textSync('Palindrome', { horizontalLayout: 'full' })));
  console.log(chalk('This app calculates palindrome for given range of numbers.'));
};

export const logResultMessage = ({ palindrome, palindromeType }) => {
  console.log(composeResultMessage(palindrome, palindromeType));
};
