import { expect } from 'chai';
import isEven from '../../../src/components/filters/isEven';

describe('isEven', () => {
  it("should return 'true' when even number was pass as an argument.", () => {
    expect(isEven(2)).to.be.true;
  });

  it("should return 'false' when odd number was pass as an argument.", () => {
    expect(isEven(3)).to.be.false;
  });
});
