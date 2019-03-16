# Palindrome

Console application finding a palindrome (one that reads the same backwards as forwards), that was made of two number components from given range of numbers and using a given formula.

Application made based on functional programming principals.

## Instalation

```git clone https://github.com/Bearsie/palindrome.git```

```yarn install```

```yarn start``` - build and run app

```yarn run:app``` - run app

## Description

1. Specify a range of numbers from which palindromes will be designated. In brackets are given default values.
<p align="center">

  <img src="https://user-images.githubusercontent.com/29863991/54480498-7678d480-4829-11e9-9d47-a1a3d0a342e2.png" alt="app-preview-specify-numbers-range" width="100%" height="auto" align="center">

</p>

2. Given range of numbers can be filtred. It's possible to extract those of numbers: evens, odds, primes, palindromes. These filters can also be combine with each other.
<p align="center">

  <img src="https://user-images.githubusercontent.com/29863991/54480885-821aca00-482e-11e9-8207-c30026445964.png" alt="app-preview-specify-numbers-filters" width="100%" height="auto" align="center">

</p>

3. Provide *formula* that specifies how palindromes will be calculated. It can be any function body, that use two
arguments named 'valueOne' and 'valueTwo': (valueOne, valueTwo) => *formula*

<p align="center">

  <img src="https://user-images.githubusercontent.com/29863991/54481941-d8dad080-483b-11e9-9776-87dae235680e.png" alt="app-preview-provide-formula" width="100%" height="auto" align="center">

</p>

4. Specify which type of palindrome should be designated: smallest, largest, all palidromes.

<p align="center">

  <img src="https://user-images.githubusercontent.com/29863991/54481614-2d2f8180-4837-11e9-897f-db1952396190.png" alt="app-preview-specify-palindrome-type" width="100%" height="auto" align="center">

</p>

5. As a result we are getting palindrome value and collection of numbers (valueOne and valueTwo) that are components of found palindrome.

<p align="center">

  <img src="https://user-images.githubusercontent.com/29863991/54481995-a8476680-483c-11e9-8825-2fb45f9c1517.png" alt="app-preview-calc-results" width="100%" height="auto" align="center">

</p>

## For development
- unit testing with `mocha` and `chai`
- `jsdoc` documentation

### Scripts
- ```yarn build``` - build app,
- ```yarn watch``` - build on every change,
- ```yarn test``` - run unit tests
- ```yarn start``` - build and run app
- ```yarn run:app``` - run app

## Authors

* **Wojciech Niedzwiedz** - [Bearsie](https://github.com/Bearsie)

## License

Peg Solitaire is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detail.
