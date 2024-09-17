/*Export the function containsDuplicate

Implement the containsDuplicate function so that it returns true if the array contains duplicate elements and false otherwise. Ensure that your implementation handles different edge cases and satisfies the given constraints.*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = function (nums) {
    return !nums.every((num) => {
        return nums.indexOf(num) === nums.lastIndexOf(num);
      });
}
