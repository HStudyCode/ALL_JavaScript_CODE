// function hello() {
//     console.log("Hello world!");
// }
// hello();
// hello.call();
// 
// call apply bind

function about(hobby, fabMusic) {
    console.log(this.uName, this.age, hobby, fabMusic);
}
const user1 = {
    uName: "hara",
    age: 25,

}
const user2 = {
    uName: "nath",
    age: 1000,

}

// call
about.call(user2, "chess", "5m")
//apply
about.apply(user1, ["chess", "5m"])
//bind
const func = about.bind(user2, "chess", "5m")
func();