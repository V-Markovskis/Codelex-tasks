export {};

function trimWord(word: string) {
  return word.trim().toLowerCase().repeat(2);
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"
