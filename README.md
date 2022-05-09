# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jhoangqm/lotide`

**Require it:**

`const _ = require('@jhoangqm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head`: accepts an array and returns the first element
- `tail`: accepts an array and returns the same array but removes the first element
- `middle`: accepts an array and return only the middle element or elements
- `countLetters`: accepts a string and returns an object with the key value pairs of each character in a string, and the number of occurence
- `countOnly`: accepts an array of string and returns the count of specific subset
- `findKey`: accepts an object and a value: it will verify the object and returns the first key for which the callback function returns a truthy value
- `findKeyByValue`: searches for a key on an object that matches a given value
- `flatten`: given a single nested array, flattens into a single-level array
- `letterPositions`: returns all the indicators of each character in the given string
- `map`: iterates over given array and applies given callback function
- `takeUntil`: collects items from the provided array until the callback provided returns a truthy value
- `without`: returns an array after removing unwanted elements
- `eqArrays`: accepts two arrays and returns true or false based on if they are equal
- `eqObjects`: accepts two objects and returns true or false based on if they are equal
- `assertObjectsEqual`: Asserts strict equality of actual and expected objects
- `assertEqual`: Asserts strict equality of actual and expected input value
- `assertArraysEqual`: Asserts strict equality of actual array and expected array
