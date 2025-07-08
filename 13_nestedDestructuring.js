console.log();
// nested Destructuring
console.log();


const users = [
    {userId:1, Uname: 'Haranath', gender: 'male'},
    {userId:2, Uname: 'abc', gender: 'male'},
    {userId:3, Uname: 'xyz', gender: 'male'},
]

const [{Uname}, , {gender}]= users;
console.log(Uname, gender);
 