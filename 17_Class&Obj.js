//**    Objects 




// const student = {
//     fullName: "Hara", marks: 95.5,
//     printMarks: function () {
//         console.log("Marks =", this.marks);
//     }
// }


const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
}

const karanArjun = {
    salary: 50000
};


karanArjun.__proto__=employee;


/////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// class

class ToyotaCar{
    start(){
        console.log("Start");
    }


    stop(){
        console.log("Stop");
    }

    setBrand(brand){
        this.brandName=brand;
    }
}

let fortuner=new ToyotaCar();
fortuner.setBrand("Fortuner");
let lexus=new ToyotaCar();


/////////////////////////////////////////////////////

//extends (Inheritance)


class Person{
    eat(){
        console.log("Eat");
    }

    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve problem");
    }
}

let haraObj=new Engineer();