import isEven from './isEven';
import isOdd from './isOdd';
import isPalindrome from './isPalindrome';
import isPrime from './isPrime';

const noFilters = number => number;
const FILTER_FUNCTIONS = [noFilters, isEven, isOdd, isPrime, isPalindrome];

export default FILTER_FUNCTIONS;
