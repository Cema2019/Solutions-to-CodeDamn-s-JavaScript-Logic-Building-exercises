/*In this lab, you will be building a function that takes an integer array as input and moves all the 0s present in the array to the end while maintaining the relative order of the non-zero elements. You are required to implement this function in-place without making a copy of the input array.

Here's your task:

Implement the moveZeroes function that takes an integer array nums as input and moves all 0s present in the array to the end while maintaining the relative order of the non-zero elements.
Consider the following example:

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [1,0,0,4,5]
Output: [1,4,5,0,0]

Example 3:

Input: nums = [0]
Output: [0]

Challenges
Export the moveZeroes function.
Test the moveZeroes function with an array of integers and validate if all the zeroes are moved to the end of the array while maintaining the relative order of the non-zero elements.*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums) {
    let strArray = nums.map(num => num.toString());

    // Filter out non-zero elements and zero elements
    let nonZeroDigits = strArray.filter(num => num !== '0');
    let zeroDigits = strArray.filter(num => num === '0');

    // Concatenate non-zero elements and zero elements
    let resultArray = [...nonZeroDigits, ...zeroDigits];

    // Update the original array using forEach
    resultArray.forEach((str, index) => {
        nums[index] = parseInt(str, 10);
    });
}
