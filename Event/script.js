let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button1 is clicked");
// };

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked");
})

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
};