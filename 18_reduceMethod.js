console.log();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// sum of all the numbers in array
// initially accumulator value is 0;

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log("Sum of array is : " + sum);
console.log();

const userCart = [
    { productId: 1, productName: "mobile1", price: 10000 },
    { productId: 2, productName: "mobile2", price: 20000 },
    { productId: 3, productName: "mobile3", price: 30000 },
]

const finalPrice = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);

console.log("Final price : " + finalPrice);