/*Export a function named nextGreatestLetter that takes two arguments: an array of characters letters and a character target. The function should return a character. - Make sure you are using ES modules to export your function.

The function must find the smallest character in the array letters that is lexicographically greater than the target character, return it. If no such character is found, the function should return the first character in the array. - Compare the target character with each character in the array until you find the desired character. If the target character is greater than all characters in the array, return the first character in the array.*/


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
export function nextGreatestLetter(letters, target) {
    return  letters.filter(x => x > target)[0] || letters[0];
}
