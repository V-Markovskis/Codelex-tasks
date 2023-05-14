export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: String) {
    const findSymbol = email.indexOf('@');
    let partToHide = '';

    if(email.slice(0, findSymbol).length > 2 && email.slice(0, findSymbol).length < 6) {
        partToHide = email.slice(0, 2);
        return partToHide + '...' + email.slice(findSymbol);
    } else if(email.slice(0, findSymbol).length > 2) {
        partToHide = email.slice(0, 3);
        return partToHide + '...' + email.slice(findSymbol);
    } else {
        partToHide = email.slice(0, findSymbol);
        return '...' + email.slice(findSymbol);
    }
    //return partToHide + '...' + email.slice(findSymbol);
}


/* function protectEmail(email: String) {
    const atIndex = email.indexOf('@');
    const hiddenPart = email.slice(0, atIndex).length > 2 ? email.slice(0, 3) : email.slice(0, atIndex);
    return hiddenPart + '...' + email.slice(atIndex);
  }
 */
//console.log(protectEmail("Asecret123AAAA@codelex.io"));
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com