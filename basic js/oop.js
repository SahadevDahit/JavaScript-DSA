class sum {
    display = (a, b) => {
        return (a + b) + " ❤️";
    }
}
class mul extends sum {
    displayMul(a, b) {
        return (a * b) + " ❤️";


    }
}
class sub extends sum {
    displaySub(a, b) {
        return (a - b) + " ❤️";

    }
}

var b = new mul();
console.log(b.display(2, 3));
console.log(b.displayMul(55, 3));
let sb = new sub()
console.log(sb.displaySub(55, 3));