// Array 

const numbers = [4, 5, 6, 7];


// using foreach method
const myFunc = (num, index) => {
    console.log(`index is ${index} and number is ${num * 2}`);
}

numbers.forEach(myFunc);


console.log();
console.log();

// Function
const multiplyBy2 = (number) => {

    console.log("index vlaue is : ", number);
    console.log("multiplyBy2 number is: ", number * 2);
}

// assign the index number
let n = 3;

// condition checking
if (n > numbers.length) {
    console.log("Exceed the array length");

} else {
    console.log("index no is :", n);


    multiplyBy2(numbers[n]);
}
