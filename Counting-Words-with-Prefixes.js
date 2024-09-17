/*Implement and export the prefixCount function using ESM - Make sure to implement the prefixCount function and export it using ESM syntax.

Test prefixCount function with example inputs - Ensure your function works correctly with the given examples as well as additional test cases. Test with the following inputs and prefixes:*/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
export var prefixCount = function (words, pref) {
    return words.filter(word => word.startsWith(pref)).length;
}
