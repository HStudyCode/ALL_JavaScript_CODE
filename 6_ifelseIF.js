console.log();

let tempInDegree = 50;

if (tempInDegree < 0) {
    console.log("Extremely cold");
} else if (tempInDegree < 16) {
    console.log("cold");
} else if (tempInDegree < 25) {
    console.log("Normal");
} else if (tempInDegree < 35) {
    console.log("Hot");
} else if (tempInDegree < 45) {
    console.log("too hot");
} else {
    console.log("Extremely hot");
}
console.log();