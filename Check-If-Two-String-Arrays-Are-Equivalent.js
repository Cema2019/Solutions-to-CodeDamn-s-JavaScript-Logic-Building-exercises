/*determine if two given string arrays word1 and word2 represent the same string. A string is represented by an array if the array elements concatenated in order forms the string. You have to write a function arrayStringsAreEqual that returns true if the two arrays represent the same string, and false otherwise.

Consider the following examples:

Example 1:

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
arrayStringsAreEqual(word1, word2); // Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.*/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
export const arrayStringsAreEqual = function (word1, word2) {
    return word1.join("") === word2.join("");
}
