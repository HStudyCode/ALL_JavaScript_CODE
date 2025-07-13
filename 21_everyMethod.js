const userCart = [
    { productId: 1, productName: "mobile1", price: 10000 },
    { productId: 2, productName: "mobile2", price: 20000 },
    { productId: 3, productName: "mobile3", price: 30000 },
]

const foundItem = userCart.every((cartItem) => {
    return cartItem.price < 50000;
})

console.log(foundItem);
