/*In this lab, you will be tasked with converting a given 0-indexed 1-dimensional (1D) integer array original into a 2-dimensional (2D) array. You will be given two integers, m and n, representing the desired number of rows and columns, respectively, for the resulting 2D array. Your goal is to create a 2D array with m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Your function construct2DArray should return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.*/

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
export function construct2DArray(original, m, n) {
    // Return empty array if the number of items in the original array does not match the required number of elements for a 2D array
    if (original.length !== m * n) {
        return [];
    }

    // Use Array.from to create the 2D array
    return Array.from({ length: m }, (_, i) => 
        original.slice(i * n, i * n + n)
    )
}
