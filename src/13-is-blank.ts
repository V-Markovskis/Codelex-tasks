export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
function isBlank(value: string | null): boolean {
    /*if(value === null || value === undefined || value === " " || value === "") {
        return true;
    }
    */

    //^ asserts the start of the string.
    //* matches 0 or more occurrences of the preceding character (space in this case).
    // $ asserts the end of the string.
    if(value === null || value.match(/^ *$/) !== null) {
        return true;
    } else if (value.trim()) {
        return true;
    }
        return false;
}


console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
