export {};

function concatStrings(w1: string, w2: string) {
  return w1.concat(' ').concat(w2);
}

const result = concatStrings('hello', 'world'); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
