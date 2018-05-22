import { expect } from 'chai';
import { FILTER_OPTIONS, PALINDROME_TYPES, QUESTIONS } from '../src/app/inquirerSetup';

const questionsNames = QUESTIONS.map(question => question.name);
const defaultAnswers = QUESTIONS.map(question => question.default);
const simulatedDefaultAnswers = {
  valueOne: defaultAnswers[0],
  valueTwo: defaultAnswers[1],
  selectedFilters: defaultAnswers[2],
  calcPattern: defaultAnswers[3],
  selectedPalindromeTypes: defaultAnswers[4],
};
const simulatedAnswers = simulatedDefaultAnswers;
const isIncludedIn = options => selected => options.includes(selected);

describe('Enquirer', () => {
  it('should prompt only 5 questions.', () => {
    expect(QUESTIONS.length).to.equal(5);
  });

  it('should prompt questions, that match with simulated output.', () => {
    expect(questionsNames).to.deep.equal(Object.keys(simulatedAnswers));
  });
});

describe('Answer about filters', () => {
  it('should contains at least one selected option', () => {
    expect(simulatedAnswers.selectedFilters.every(isIncludedIn(FILTER_OPTIONS))).to.be.true;
  });
});

describe('Answer about palindrome types', () => {
  it('should contains at least one selected option', () => {
    expect(simulatedAnswers.selectedPalindromeTypes.every(isIncludedIn(PALINDROME_TYPES))).to.be
      .true;
  });
});
