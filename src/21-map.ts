export {};

function tidyUpString(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
//But this is not what we desire to achieve. 
//To capitalize the first character of a string,
// We can use the charAt() to separate the first character and then use the toUpperCase() function to capitalize it.
// Now, we would get the remaining characters of the string using the slice() function.
function capitalise(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
//The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
//callbackFn - function to execute for each element in the array. Its return value is added as a single element in the new array. 
let mentorsTidy = mentors.map(mentors => capitalise(tidyUpString(mentors))); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]