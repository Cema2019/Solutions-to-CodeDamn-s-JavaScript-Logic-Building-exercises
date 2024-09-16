/*Create a function capitalize that takes an array of strings as input and returns a new array with all the strings capitalized.

Create a function filterLength that takes an array of strings and a number as input, and returns a new array containing only the strings with a length greater than or equal to the provided number.

Create a function sumOfSquares that takes an array of integers and calculates the sum of squares for each element in the array.

Export all the functions*/

const capitalize = (arr) => {
    return arr.map(x => x.toUpperCase());
}

const filterLength = (arr, n) => {
    return arr.filter(x => x.length >= n);
}

const sumOfSquares = (arr) => {
    return arr.map(x => Math.pow(x, 2)).reduce((val, acc) => val + acc, 0);
}

export {capitalize, filterLength, sumOfSquares};
