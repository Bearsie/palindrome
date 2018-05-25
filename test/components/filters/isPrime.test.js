import { expect } from 'chai';
import isPrime from '../../../src/components/filters/isPrime';

describe('isPrime', () => {
  describe('a) when value of function argument is lower than 2', () => {
    it("should return 'false'", () => {
      expect(isPrime(1)).to.be.false;
    });
  });

  describe('b) when value of function argument is equal 2', () => {
    it("should return 'true'", () => {
      expect(isPrime(2)).to.be.true;
    });
  });

  describe('c) when value of function argument is equal 3', () => {
    it("should return 'true'", () => {
      expect(isPrime(3)).to.be.true;
    });
  });

  describe('d) when value of function argument is higher than 3', () => {
    const numberToCheck = 97;
    const multiplicityOf6 = k => 6 * k;

    it("should return 'true'", () => {
      expect(isPrime(numberToCheck)).to.be.true;
    });

    describe('when function argument:', () => {
      describe('is not divisible by 2 and 3:', () => {
        it('should not be divisible by 2', () => {
          expect(numberToCheck % 2 === 0).to.be.false;
        });

        it('should not be divisible by 3', () => {
          expect(numberToCheck % 3 === 0).to.be.false;
        });
      });

      describe('is not divisible by multiplicity of 6 decreased by 1:', () => {
        const kMax = Math.floor((numberToCheck + 1) / 6);

        for (let k = 1; k <= kMax - 1; k += 1) {
          it(`should not be divisible by ${multiplicityOf6(k) - 1}`, () => {
            expect(numberToCheck % (multiplicityOf6(k) - 1) === 0).to.be.false;
          });
        }
      });

      describe('is not divisible by multiplicity of 6 increased by 1:', () => {
        const kMax = Math.floor((numberToCheck - 1) / 6);

        for (let k = 1; k <= kMax - 1; k += 1) {
          it(`should not be divisible by ${multiplicityOf6(k) + 1}`, () => {
            expect(numberToCheck % (multiplicityOf6(k) + 1) === 0).to.be.false;
          });
        }
      });
    });
  });

  describe('e) when value of function argument is higher than 3', () => {
    const numberToCheck = 20;

    it("should return 'false", () => {
      expect(isPrime(numberToCheck)).to.be.false;
    });

    describe('when function argument:', () => {
      it('is divisible by 2', () => {
        expect(numberToCheck % 2 === 0).to.be.true;
      });
    });
  });

  describe('f) when value of function argument is higher than 3', () => {
    const numberToCheck = 27;

    it("should return 'false", () => {
      expect(isPrime(numberToCheck)).to.be.false;
    });

    describe('when function argument:', () => {
      it('is divisible by 3', () => {
        expect(numberToCheck % 3 === 0).to.be.true;
      });
    });
  });
});
