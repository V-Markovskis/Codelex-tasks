export {};

function truncateString(text: string, length: number): string {
    return text.substring(0, length);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
