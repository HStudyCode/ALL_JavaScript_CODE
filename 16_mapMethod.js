console.log();
// map method

const numbers = [3, 4, 5, 6, 7, 8];

// const square = (number, index) => {
//     return `Index is : ${index} and squared value of the current no is : ${number * number}`;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);


const squareNumber = numbers.map((number, index) => {
    return `Index is : ${index} and squared value of the current no is : ${number * number}`;
});
console.log(squareNumber);
console.log();


const users=[
    {Uname: "Haranath", age:25},
    {Uname: "abc", age:26},
    {Uname: "pqr", age:27},
    {Uname: "xyz", age:28},
]

const userName = users.map((user)=>{
    return user.Uname;
});

console.log(userName);

console.log();