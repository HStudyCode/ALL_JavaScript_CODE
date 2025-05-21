const URL = "https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");


const getFacts = async () => {

    console.log("getting data........");
    let response = await fetch(URL);
    console.log(response);

    //JSON format
    let data = await response.json();
    console.log(data[0].text);
    console.log(data[1].text);
    console.log(data[2].text);
    console.log(data[3].text);
    console.log(data[4].text);


    factPara.innerText=data[0].text;
    
}
