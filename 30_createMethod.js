console.log();
// methods
// which function written in inside of a object it's call method

const person = {
    pName: "ABCxyz",
    age: 123,

    about: function () {
        console.log(`person name is ${this.pName} and age is ${this.age}`);

    }
}

person.about();
console.log();


// 
///
////
function personalInfo() {
    console.log(`person name is ${this.pName} and age is ${this.age}`);
}


const person1 = {
    pName: "Haranath",
    age: 25,

    about: personalInfo
}
const person2 = {
    pName: "Haranath",
    age: 15,

    about: personalInfo
}
const person3 = {
    pName: "Haranath",
    age: 20,

    about: personalInfo
}

person1.about();
person2.about();
person3.about();
console.log();