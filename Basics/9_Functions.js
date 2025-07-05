console.log();

function myFunc() {
    console.log("Welcome to text function");
    console.log("This is the next line text");
}
myFunc();
console.log();

// **************************************************************************
function myFunction(msg) {
    console.log(msg);
}
myFunction("I love India");
console.log();

// **************************************************************************


function total_sum(First_num, Second_Num) {
    console.log("total_sum: ", First_num + Second_Num);
}
total_sum(2, 5);

console.log();
// **************************************************************************

function sum(First_num, Second_Num) {
    s = First_num + Second_Num;
    return s;

}

let val = sum(3, 5);
console.log("sum is: ", val);

//Practice
//Count the no of vowels in the sentence

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" ||
            char === "A" ||
            char === "E" ||
            char === "I" ||
            char === "O" ||
            char === "U"
        ) {
            count++;
        }
    }

    console.log(count);
}
console.log();
console.log("No of vowels: ");
countVowels("aaaaaa");