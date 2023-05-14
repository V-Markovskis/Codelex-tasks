export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(num: number) {
    //The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(i));
    }
    console.log('===============================');
}

draw(3);
/* Expected output:
    
    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
