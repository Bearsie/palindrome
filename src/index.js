/* eslint no-console: "off" */
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

clear();

console.log(chalk.yellow(figlet.textSync('Palindrome', { horizontalLayout: 'full' })));
console.log(chalk('This app calculates palindrome for given range of numbers.'));
