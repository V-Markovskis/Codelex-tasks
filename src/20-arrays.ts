export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

//The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
//const myString = 'John Doe';
//const stringToArray = myString.split(" ");
//console.log(stringToArray);

function stringToArray(arr: string[]): string[] {
    const resultArr: string [] = [];
    // funkcija - (name => resultArr.push(name)), NAV nosaukuma fukcijai
    // name here - John, Doe, Jane, Doe...etc.
    arr.forEach(fullName => 
    fullName.split(" ").forEach((name) => resultArr.push(name))
    );
    return resultArr;

    //return arr.reduce((acc, fullName) => {
            //fullName.split(" ").forEach((name) => acc.push(name));
        //}, [] as String []);
    //);

}

console.log(stringToArray(["John Doe", "Jane Doe The Second"])); // Expected output: ['John', 'Doe', 'Jane', 'Doe', 'The', 'Second']
