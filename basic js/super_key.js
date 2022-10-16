class bird {
    constructor(name) {
        this.name = name;
        console.log(`The name  of the bird is ${this.name}`);
    }
}

class parrot extends bird {
    constructor(name, color) {
        super(name)
        this.color = color;
        console.log(`The color of ${this.name} is ${this.color}`);
    }
}

// let obj = new bird("Parrot");
let obj1 = new parrot("Parrot", "Green");