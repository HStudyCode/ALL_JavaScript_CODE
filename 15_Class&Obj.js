class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created");
    }

    eats() {
        console.log(" Animal Eats");
    }

    jumps() {
        console.log("Animal Jumps");
    }
}


class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("obj is created and he is a lion.....");
    }
    eats() {
        super.eats();
        console.log(" Lion Eats");
    }
}

let a = new Animal("Bunny");
console.log(a);
let l = new Lion("Shera");
console.log(l);

