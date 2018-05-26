import { expect } from 'chai';
import evaluateAnswers from '../../../src/components/inquirer/evaluateAnswers';

const testFunctionOne = () => "I'm test function no. 1";
const testFunctionTwo = () => "I'm test function no. 2";
const testFunctionThree = () => "I'm test function no. 3";

const constantDataToEvaluate = {
  FILTER_OPTIONS: ['filterOne', 'filterTwo', 'filterThree'],
  FILTER_FUNCTIONS: [testFunctionOne, testFunctionTwo, testFunctionThree],
};
const inputedDataToEvaluate = {
  valueOne: '20',
  valueTwo: '100',
  selectedFilters: [
    constantDataToEvaluate.FILTER_OPTIONS[1],
    constantDataToEvaluate.FILTER_OPTIONS[2],
  ],
  calcPattern: 'valueOne + valueTwo',
  selectedPalindromeTypes: ['largest'],
};

const evaluatedData = evaluateAnswers(constantDataToEvaluate)(inputedDataToEvaluate);

describe('Inquirer', () => {
  describe('evaluateAnswers:', () => {
    it('should return object with expected properties', () => {
      expect(evaluatedData).to.have.all.keys(
        'rangeFrom',
        'rangeTo',
        'filtersToApply',
        'selectedPalindromeTypes',
        'calcFunction',
      );
    });

    it('should convert valueOne to number', () => {
      expect(evaluatedData.rangeFrom).to.equal(20);
    });

    it('should convert valueTwo to number', () => {
      expect(evaluatedData.rangeTo).to.equal(100);
    });

    it('should return property with representation selection of filters', () => {
      expect(evaluatedData.filtersToApply).to.deep.equal([testFunctionTwo, testFunctionThree]);
    });

    it('should pass selectedPalindromeTypes without any convertion,', () => {
      expect(evaluatedData.selectedPalindromeTypes).to.deep.equal(inputedDataToEvaluate.selectedPalindromeTypes);
    });

    it('should convert calcPatern expresion into function,', () => {
      expect(typeof evaluatedData.calcFunction === 'function').to.be.true;
    });
  });
});
