export {};

const count = (wholeText: string, elementToFind: string) => {
    //he g and i modifiers have these meanings: g = global,
    //match all instances of the pattern in a string, not just one. i = case-insensitive (so, for example, /a/i will match the string "a" or "A" .
    const regex = new RegExp(elementToFind, 'gi');
    const matches = wholeText.match(regex);
    return matches ? matches.length : 0;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
