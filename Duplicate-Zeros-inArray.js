/*Implement and export the duplicateZeros function - Make sure to implement the duplicateZeros function that takes an array as input, duplicates the zeros, and shifts the remaining elements to the right. Export this function using ESM import/export syntax.

Pass the given test cases - Ensure that your implementation of the duplicateZeros function correctly solves the provided test cases. If you're stuck, double-check your logic and ensure that it handles edge cases.*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = function (arr) {
    
const originalLength = arr.length;

// Create a new array with duplicated zeros using map and flat
let newArr = arr.map(num => num === 0 ? [0, 0] : [num]).flat();

// Modify the original array in place to match the new array up to the original length
arr.splice(0, originalLength, ...newArr.slice(0, originalLength));
}

export default duplicateZeros;
