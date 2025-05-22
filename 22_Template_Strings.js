// const Name = "Haranath mondal";
// const Roll_No=302210501012;

// const age=25;

// const about=`my name is ${Name} age is ${age} Roll No is ${Roll_No}`
// console.log(about);


// user input 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (userName) => {
  rl.question("Enter your age: ", (age) => {
    rl.question("Enter your roll number: ", (roll) => {
      console.log(`\nName: ${userName}\nAge: ${age}\nRoll Number: ${roll}`);
      rl.close();
    });
  });
});
