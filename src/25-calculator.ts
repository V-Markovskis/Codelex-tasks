export {};

function add(arg1: number, arg2: number) {
    if(arg1 > arg2) {
        return arg1 +=1;
    } else {
        return arg2 +=1;
    }
}

function subtract(arg1: number, arg2: number) {
    return arg1 - arg2;
}

function sum(array: number[]) {
    //let sum: number = 0;
    /*for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
    */
   
    //array.map(x => sum += x);
    //return sum;

    //array.reduce(function(total, currentValue, currentIndex, array), initialValue)
    //reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    let sum = array.reduce(function(a, b){
        return a + b;
      })
      return sum;
}

function multiply(array: number[]) {
    /*let sum = 1;
    for(let i = 0; i < array.length; i++) {
        sum *= array[i];
    }
    return sum;
    */

    let sum = array.reduce((a, b)=> a*b, 1);
    return sum;
}

//calculate 2 raised to the power of 3
function power(base: number, exponent:number) {
    return Math.pow(base, exponent);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
