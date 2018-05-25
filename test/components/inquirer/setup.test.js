import { expect } from 'chai';
import {
  FILTER_OPTIONS,
  PALINDROME_TYPES,
  QUESTIONS,
  questionAboutValueOne,
  questionAboutValueTwo,
} from '../../../src/components/inquirer/setup';

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
  describe('Questions:', () => {
    it('should prompt only 5 questions.', () => {
      expect(QUESTIONS.length).to.equal(5);
    });

    it('should prompt questions, that match with simulated answers.', () => {
      expect(questionsNames).to.deep.equal(Object.keys(simulatedAnswers));
    });

    describe('about defining the range of numbers should validate the input:', () => {
      const numberToValidation = 2;

      it('should be above 0', () => {
        expect(numberToValidation).to.be.above(0);
      });

      it('should be finite', () => {
        expect(Math.floor(numberToValidation)).to.equal(numberToValidation);
      });

      it('should pass validation for ValueOne', () => {
        expect(questionAboutValueOne.validate(numberToValidation)).to.be.true;
      });

      it('should pass validation for ValueOne', () => {
        expect(questionAboutValueTwo.validate(numberToValidation)).to.be.true;
      });
    });
  });

  describe('Answers:', () => {
    describe('about filters', () => {
      it('should contain values only from the set of filters options', () => {
        expect(simulatedAnswers.selectedFilters.every(isIncludedIn(FILTER_OPTIONS))).to.be.true;
      });
    });

    describe('about palindrome types', () => {
      it('should contain values only from the set of palindrome types options', () => {
        expect(simulatedAnswers.selectedPalindromeTypes.every(isIncludedIn(PALINDROME_TYPES))).to.be
          .true;
      });
    });
  });
});
