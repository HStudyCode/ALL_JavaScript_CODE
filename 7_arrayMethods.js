console.log();

let numbers = [0, 1, 2, 3];
console.log("Elements of the array: " + numbers);

console.log();

let engLetters = ["a", "b", "c"];
console.log("Elements of the array: " + engLetters);
console.log();

// push method
numbers.push(7);
console.log("after Pushed an element: " + numbers);
console.log();

engLetters.push("..z");
console.log("after Pushed an element: " + engLetters);

// pop method
console.log();
numbers.pop();
console.log("After pop an element in number Array : "+numbers);


//shift and unshift works on the 1st index of the array(like push & pop operation in bottom of the array)

//Unshift

console.log();
numbers.unshift(85);
console.log("Unshift number:"+numbers);

//shift

console.log();
numbers.shift(3);
console.log("shift number:"+numbers);


console.log();
