// 2015 / es6 
// class keyword 
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }

}


const user1 = new CreateUser('haranath', 'X', 'haranath@gmail.com', 18, "my address");
const user2 = new CreateUser('abc', 'X', 'haranath@gmail.com', 19, "my address");
const user3 = new CreateUser('xyz', 'Xa', 'haranath@gmail.com', 17, "my address");
console.log(user3);
console.log(user3.is18());