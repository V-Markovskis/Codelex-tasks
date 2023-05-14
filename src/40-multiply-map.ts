export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */


//cb - callback
//fn - function
//const myGap = <T>(value: T[], fn: (num: T) => any) => {}
const myMap = (nums: number[], cb: (num: number) => any) => {
  const result: number[] = [];
  for(let i = 0; i < nums.length; i++) {
    //TypeScript introduced a new type never, which indicates the values that will never occur.
    result.push(cb(nums[i]));
  }
  return result;
};

// const myMap = <T>(arr: number[], callback :(num: T) => any) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// };

// const map = (numbers: number[], ) => {
//   for(let i = 0; i < numbers.length; i++) {
//     numbers[i] = i * i;
//   }
//   return numbers;
// };

const numbers = [1, 2, 3];
const doubled = myMap(numbers, function(number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
