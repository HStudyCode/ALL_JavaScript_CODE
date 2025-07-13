const users=[
    {userId:1, userName: "Haranath"},
    {userId:2, userName: "abc"},
    {userId:3, userName: "def"},
    {userId:4, userName: "pqr"},
    {userId:5, userName: "xyz"},
]


const myUser=users.find((user)=>{
    return user.userId==3
});

console.log(myUser);
