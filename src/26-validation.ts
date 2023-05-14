export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
// isNaN() – Stands for “is Not a Number”, if variable is not a number, it return true, else return false.
// includes() - It returns true if the item is found in the array/string and false if the item doesn't exist. (array.includes(item, fromIndex))
// The Number.isInteger() method returns true if a value is an integer of the datatype Number. Otherwise it returns false .
function validate(num: any) {
    return (!isNaN(num) && Number.isInteger(num) && !excludedNums.includes(num,0));
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
