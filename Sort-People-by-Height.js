/*In this lab, you are tasked to implement a function called sortPeople that sorts an array of names based on their corresponding heights in descending order. The function accepts two input arrays, one for the names and another for the corresponding heights of the individuals. The arrays are guaranteed to have distinct heights for each person.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
export const sortPeople = function (names, heights) {
    // Create an object from the two given arrays: Key: names, value: heights.
    const obj = Object.fromEntries(names.map((names, index) => [names, heights[index]]));

    // Sort the keys in ascending order according to their values.
    return Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
}
