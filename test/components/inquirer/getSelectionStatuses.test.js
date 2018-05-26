import { expect } from 'chai';
import getSelectionStatuses from '../../../src/components/inquirer/getSelectionStatuses';

describe('Inquirer', () => {
  describe('getSelectionStatuses:', () => {
    const options = ['optionOne', 'optionTwo', 'optionThree'];
    const selectedOptions = ['optionOne'];
    const selectionStatuses = getSelectionStatuses(options)(selectedOptions);

    it("should map options with booleans: 'true' - if selected, 'false' if not selected ", () => {
      expect(selectionStatuses).to.have.ordered.members([true, false, false]);
    });
  });
});
