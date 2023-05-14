export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const min = (array: number[]) => {
    //The apply() method calls the specified function with a given this value, and arguments provided as an array
    //return Math.min.apply(null, array);
    //return array.reduce((a, b) => Math.min(a, b), -Infinity);

    //spread operator / spread syntax
    //return Math.min(...array);

    let findMinElement = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < findMinElement) {
            findMinElement = array[i];
        }
    }
    return findMinElement;

};

const max = (array: number[]) => {
    //return Math.max.apply(null, array);
    //return array.reduce((a, b) => Math.max(a, b), -Infinity);

    //spread operator / spread syntax
    //return Math.max(...array);

    let findMinElement = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > findMinElement) {
            findMinElement = array[i];
        }
    }
    return findMinElement;
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
