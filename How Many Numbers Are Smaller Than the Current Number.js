/*Challenge 1: Solve the problem for given input [8,1,2,2,3] - In this challenge, implement the smallerNumbersThanCurrent function so that it returns the correct output when given the input array [8,1,2,2,3].

Challenge 2: Solve the problem for given input [6,5,4,8] - Implement the function for another input [6,5,4,8]. Make sure your function works for different inputs and provides expected outputs.*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
    return nums.map(num => {
        return nums.filter(otherNum => otherNum < num).length;
    });
}

export default smallerNumbersThanCurrent
