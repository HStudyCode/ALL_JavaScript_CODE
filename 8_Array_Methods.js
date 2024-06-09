//Push methods

let Trees = ["Mango", "Apple", "Banana"]
console.log(Trees);
console.log();

Trees.push("Orange");



//toString method

console.log(Trees);
console.log();
console.log(Trees.toString());
console.log();


//Pop methods
let deletedItems = Trees.pop();

// Trees.pop();
// Trees.pop();
console.log(Trees);
console.log(deletedItems);

console.log();
console.log();



//Concat method

let marvelHeros = ["Thor", "Spiderman", "Ironman"];
let dcHeros = ["Superman", "Batman"];

let Heroes = marvelHeros.concat(dcHeros);
console.log(Heroes);


//unshift method use to add/push element to the start of array;
//shift method use to delete/pop element to the start of array;


Heroes.unshift("Antman");
console.log(Heroes);
console.log();

Heroes.shift();
console.log(Heroes);

