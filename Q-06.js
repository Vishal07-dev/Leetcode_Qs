/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let newarr = [];
    for (const element of arr) {
        newarr.push(fn(element+1)); // Apply fn to each element
    }
    console.log("Output array:", newarr); // Log the final output
    return newarr;
};

// Define fn
const fn = function (value) {
    console.log("Processing value:", value); // Log the current value being processed
     return value
};

// Call map with fn

console.log(map([1, 2, 3], fn))

