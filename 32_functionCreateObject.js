// function create object
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    return user;
}

const user1 = createUser('hara', 'x', 'hara@gmail.com', 9, "my address");
const user2 = createUser('nath', 'x', 'hara@gmail.com', 19, "my address");
const user3 = createUser('abc', 'x', 'hara@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user2.about()); ``
console.log(user3.about());