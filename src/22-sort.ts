export {};

const letters = ["a", "n", "c", "e", "z", "f"];

//The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
let sortedLetters = letters.sort(); // You are allowed to change only this line

console.log(sortedLetters); // Expected output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]
