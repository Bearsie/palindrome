/* eslint no-console: "off" */
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import { QUESTIONS } from './app/inquirerSetup';

clear();

(async () => {
  console.log(chalk.yellow(figlet.textSync('Palindrome', { horizontalLayout: 'full' })));
  console.log(chalk('This app calculates palindrome for given range of numbers.'));
  const inputedData = await inquirer.prompt(QUESTIONS);
  console.log(inputedData);
})();
