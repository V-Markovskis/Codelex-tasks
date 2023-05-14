export {};

//...numsToRemove: number[] - multiple values to remove from the array
const removeFromArray = function(arr: number[], ...numsToRemove: number[]) {
    // filter method to create a new array containing only the elements from arr that are not present in numsToRemove
    return arr = arr.filter(removeItem => !numsToRemove.includes(removeItem));
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */