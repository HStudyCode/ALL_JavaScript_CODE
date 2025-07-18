// new keyword

// function createUser (Uname, age){
//     this.Uname= Uname;
//     this.age=age;
// }
// createUser.prototype.about = function(){
//     console.log(this.Uname, this.age);
    
// }

// const user1= new createUser("Hara", 25);

// console.log(user1);
// user1.about();
//////////////////////////////////////

// new keyword
// 1.)empty object this = {}
// 2.) return this {} 



// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('haranath', 'X', 'haranath@gmail.com', 18, "my address");
const user2 = new CreateUser('abc', 'X', 'haranath@gmail.com', 19, "my address");
const user3 = new CreateUser('xyz', 'Xa', 'haranath@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());