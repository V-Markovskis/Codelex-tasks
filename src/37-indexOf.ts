export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: any[], valueToRemove: any) {
  /*const index = arr.indexOf(valueToRemove);
  if (index > -1) { // only splice array when item is found
    arr.splice(index, 1);  // 2nd parameter means remove one item only (splice(start, deleteCount))
  }
  return arr;
  */
  
  //The filter() method creates a shallow copy of a portion of a given array,
  // filtered down to just the elements from the given array that pass the test implemented by the provided function.
  return arr = arr.filter(item => item !== valueToRemove);


}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
