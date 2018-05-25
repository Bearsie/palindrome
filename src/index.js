/* eslint no-console: "off" */
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import { FILTER_OPTIONS, QUESTIONS } from './components/inquirer/setup';
import FILTER_FUNCTIONS from './components/filters/setup';

clear();
console.log(chalk.yellow(figlet.textSync('Palindrome', { horizontalLayout: 'full' })));
console.log(chalk('This app calculates palindrome for given range of numbers.'));

(async () => {
  const possibleChoices = { FILTER_OPTIONS, FILTER_FUNCTIONS };
  const inputedData = await inquirer.prompt(QUESTIONS);
  console.log(possibleChoices);
  console.log(inputedData);
})();
