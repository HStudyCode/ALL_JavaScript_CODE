function sum(a, b) {
    console.log(a + b);
}


function calculator(a, b, sumCallBack) {
    sumCallBack(a, b);
}


calculator(1, 2, sum);
sum(5, 6);



//callBack

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
// callBack Hell(nested callbacks stacked)
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});