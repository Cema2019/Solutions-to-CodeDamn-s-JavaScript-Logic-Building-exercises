/*In this lab, you have to create a function called map which takes in two arguments: an integer array arr and a mapping function fn. The function should return a new array with the transformation applied to each element such that returnedArray[i] = fn(arr[i], i).

Do not use the built-in Array.map method for this task.*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
export const map = function (arr, fn) {
    const newArr = [];
    arr.forEach((item, index) => newArr.push(fn(item, index)));
    return newArr;
}


