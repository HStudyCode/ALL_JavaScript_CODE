const obj1 = {
    key1: "Value1",
    key2: "Value2"
}

const obj2 = Object.create(obj1); //{}

//there is one more way to create empty object
obj2.key3 = "value3";

//obj2.key2 = "unique";
console.log(obj2);

// this is happening 

console.log(obj2.__proto__);

