let marks = [98, 95, 88, 98, 99]
console.log("marks:", marks);

console.log("Length array: ", marks.length);
console.log();

// Strings type array

let arr = ["Hara", "Rahul", "Rohan", "Shuvam", "Kuntal"]
console.log("Array element: ", arr);
console.log();


// console.log("using for loop");

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// console.log("using for of  loop");

// for (let el of arr) {
//     console.log(el);
// }


let cities = ["Delhi", "Pune", "Kolkata", "Basirhat", "Jadavpur"]

for (let city of cities) {
    console.log(city);
}
console.log();
for (let city of cities) {
    console.log(city.toUpperCase());
}
console.log();


//practice
// Q) For given with marks of student-> [98, 95, 88, 98, 99] find the avg marks of entire class.

let sum = 0;

for (let val of marks) {
    sum = sum + val;
    sum += val;
}
console.log("Total: ", sum);
let avg = sum / marks.length;
console.log("Avg: ", avg);

console.log(`avg marks of the class= ${avg}`);