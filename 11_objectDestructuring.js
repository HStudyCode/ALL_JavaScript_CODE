console.log();

const objCSE = {
    Roll_no: "302210501012",
    Year: "4th year",

}
console.log(objCSE);

console.log();

// Destructure the object
const rollNo = objCSE.Roll_no;
const year = objCSE.Year;

console.log();

const band = {
    bandName: "abc xyz",
    famousSong: "pqrs",
    year: 1990,
    author: "UVW",
};
// Destructure the object
let {bandName, famousSong, ...restofobj}=band;

console.log(bandName);
console.log(restofobj);








console.log();
