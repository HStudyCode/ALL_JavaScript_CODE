console.log();

const person = {
    name: "Haranath",
    age: 25
}

// using for in loop
// object.key

for(let key in person){
    console.log(key, person[key]);
}
console.log();
// also we can

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

console.log();
//object.keys method

console.log(Object.keys(person));



console.log();
