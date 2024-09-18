/*Implement the countCharacters function - Implement the countCharacters function to find the sum of lengths of all good strings that can be formed with the given words and chars. Make sure to export your function to pass the test.*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function (words, chars) {
    // Filter the words that match the criteria.
    const filtered = words.filter(word => [...word].every(char => chars.includes(char)));

    // Sum the count of their length
    return filtered.reduce((total, word) => total + word.length, 0);
}

export default countCharacters
