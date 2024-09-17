/*Export the findNumbers function - Make sure you export the findNumbers function using ESM syntax so it can be tested in the evaluation script.

Implement the findNumbers function - Implement the findNumbers function that takes an array of integers and returns the count of numbers that have an even number of digits.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
    return nums.filter(num => String(num).length % 2 === 0).length;
}

export default findNumbers
