export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */


function addFee(price: number) {
    return price * 1.01;
}
// You are allowed to change this function
function convertToUSD(price: number) {
    const conversionRate = 1;
    const priceWithFee = addFee(price);
    return priceWithFee * conversionRate;
}
// You are allowed to change this function
function convertToBRL(price: number) {
    const conversionRate = 4.99;
    const priceWithFee = addFee(price);
    return priceWithFee * conversionRate;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));
console.log("Price: R$" + priceInBRL.toFixed(2));

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
