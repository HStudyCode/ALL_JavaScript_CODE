// this -> reference to the object where "this" is used 
//         the object depends on the immediate context
//         person.name -> this.name


const person = {
    name: "Haranath",
    Age: 25,
    sayHello: function () {
        console.log(`Hi! I am ${this.name} and my age is ${this.Age}`);
    }
}

person.sayHello(); 