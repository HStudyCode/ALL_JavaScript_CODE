// // store input numbers
// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));

// //add two numbers
// const sum = num1 + num2;

// // display the sum
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);



// Import the readline module
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their name
rl.question('Please enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);
    // Close the readline interface
    rl.close();
});
