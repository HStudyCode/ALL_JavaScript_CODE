// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol as key 

// in maps you can use anything as key
// like array, number, string 

// object literal must be 
// key -> string 
// key -> symbol


// const person = {
//     firstName : "haranath",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Haranath');
// person.set('age', 7);
// person.set(1,'one');

// for(let [key, value] of person){
//     console.log(key, value)
// }

const person1 = {
    id: 1,
    firstName: "Haranath"
}

const person2 = {
    id: 2,
    firstName: "haranathx"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});

console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);