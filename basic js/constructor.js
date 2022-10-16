class animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        console.log("This is from constructor");
    }
    displayData() {
        console.log(`The color of ${this.name} is ${this.color}`);

    }


}

var obj = new animal("Parrot", "Red");
//console.log(obj.name);
//console.log(obj.displayData());
obj.displayData();