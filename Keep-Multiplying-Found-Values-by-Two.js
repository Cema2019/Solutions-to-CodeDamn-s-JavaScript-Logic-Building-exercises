/*In this lab, you will implement a function that takes an array of integers nums and an integer original. The main goal of this lab is to find and multiply the given original value by two each time it's found in the nums array. You need to follow the steps below:

If original is found in nums, multiply it by two (i.e., set original = 2 * original).
Otherwise, stop the process.
Repeat this process with the new number as long as you keep finding the number.
The function should return the final value of original.*/

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
export const findFinalValue = function (nums, original) {
    while (nums.includes(original)) {
        original *= 2;
    }
    return original;
}
