import { expect } from 'chai';
import getFiltersToApply from '../../../src/components/inquirer/getFiltersToApply';

describe('Inquirer', () => {
  describe('getFiltersToApply:', () => {
    const testFunctionOne = () => "I'm test function no. 1";
    const testFunctionTwo = () => "I'm test function no. 2";
    const testFunctionThree = () => "I'm test function no. 3";
    const testFunctionCollection = [testFunctionOne, testFunctionTwo, testFunctionThree];
    const selectionStatusesCollection = [true, true, false];
    const asignedFunctions = getFiltersToApply(testFunctionCollection)(selectionStatusesCollection);

    it("should return only functions that have selection status equal 'true'", () => {
      expect(asignedFunctions).to.have.ordered.members([testFunctionOne, testFunctionTwo]);
    });
  });
});
