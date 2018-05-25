import { expect } from 'chai';
import isPalindrome from '../../../src/components/filters/isPalindrome';

describe('isPalindrome', () => {
  it("should return 'true' when value passed as argument is palindrome.", () => {
    expect(isPalindrome(123321)).to.be.true;
  });

  it("should return 'false' when value passed as argument is not palindrome.", () => {
    expect(isPalindrome(123456)).to.be.false;
  });
});
