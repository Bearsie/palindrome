import inquirer from 'inquirer';
import FILTER_FUNCTIONS from './components/filters/setup';
import evaluateAnswers from './components/inquirer/evaluateAnswers';
import { FILTER_OPTIONS, QUESTIONS } from './components/inquirer/setup';
import computePalindromes from './components/palindromes/computePalindromes';
import { logWelcomeMessage, logResultMessage } from './components/view/logMessages';

logWelcomeMessage();

(async (questions, possibleChoices) => {
  const inputedData = await inquirer.prompt(questions);
  const data = evaluateAnswers(possibleChoices)(inputedData);
  const palindromeComputations = computePalindromes(data);

  palindromeComputations.map((computation) => logResultMessage(computation));
})(QUESTIONS, { FILTER_OPTIONS, FILTER_FUNCTIONS });
