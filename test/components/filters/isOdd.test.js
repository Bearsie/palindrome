import { expect } from 'chai';
import isOdd from '../../../src/components/filters/isOdd';

describe('isOdd', () => {
  it("should return 'false' when even number was pass as an argument.", () => {
    expect(isOdd(4)).to.be.false;
  });

  it("should return 'true' when odd number was pass as an argument.", () => {
    expect(isOdd(5)).to.be.true;
  });
});
