console.log();

const numbers = [3,5,11,33,50];

const ans = numbers.some((number)=> number%2 ===0);
console.log(ans);
console.log();

const userCart = [
    { productId: 1, productName: "mobile1", price: 10000 },
    { productId: 2, productName: "mobile2", price: 20000 },
    { productId: 3, productName: "mobile3", price: 30000 },
]

const foundSome = userCart.some((cartItem) => {
    return cartItem.price < 50000;
})

console.log(foundSome);
