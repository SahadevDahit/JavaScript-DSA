class parent {
    constructor() {}
    displayParent() {
        console.log(`This is the data from parent class 💓`);
    }


}
class child extends parent {

    displaychild() {
        console.log(`This is the data from child class 😍`);

    }

}
class child1 extends parent {
    displaychild1() {
        console.log(`This is the data from the child1`);
    }
}
class grandchild extends child {

}

let objChild = new child();
objChild.displaychild();
objChild.displayParent();
let objchild1 = new child1();
objchild1.displaychild1();
objchild1.displayParent();
let objgrand = new grandchild();
objgrand.displaychild();