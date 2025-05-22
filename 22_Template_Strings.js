

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (userName) => {
  rl.question("Enter your age: ", (age) => {
    rl.question("Enter your roll number: ", (roll) => {
        rl.question("Enter Department : ", (userDept)=>{
            console.log(`\nName: ${userName}\nAge: ${age}\nRoll Number: ${roll}\nDepartment : ${userDept}`);
            rl.close();
        })
    });
  });
});
