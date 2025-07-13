console.log();

// myArray.splice(startIndexNo, delete count(how many item), insert item it can be no or string)

const myArray = ['item1','item2','item3']

// delete item

myArray.splice(1,1)
console.log(myArray);
console.log();


// Insert Item
myArray.splice(1,0,"Inserted item")

console.log(myArray);
console.log();


// Insert and Delete both
myArray.splice(1,2,"InsertedB1","InsertedB2",5656);
console.log(myArray);

