class Car {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
console.log(Car.hello());

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.