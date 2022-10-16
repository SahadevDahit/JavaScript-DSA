function sum() {
    let total = 0;
    for (let i in arguments) {
        total += arguments[i];
    }
    console.log(total);
}


sum(3, 4);
sum(30, 40);
sum(30, 20, 10);
sum(20, 20, 40, 50);