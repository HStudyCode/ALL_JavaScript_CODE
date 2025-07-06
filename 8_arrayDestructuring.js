console.log();

const myArray =[123, 345, 567, 789];

console.log("myArray: "+ myArray);

let [myVar1, myVar2, ...myNewArray]= myArray;

console.log("value of myVar1: "+ myVar1);
console.log("value of myVar2: "+ myVar2);

// rest of all array element stored in the ...myNewArray
console.log("value of myNewArray: "+ myNewArray);

console.log();