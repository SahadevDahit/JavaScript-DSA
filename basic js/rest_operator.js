record = (name, ...args) => {
    let total = 0;
    for (let i in args) {
        total += args[i];
    }
    console.log(`${name} ❤️ : ${total} \n`);



}
record("Sahadev", 30, 50);
record("Dahit", 20, 10, 30);
record("Ronaldinho", 50, 90, 70);