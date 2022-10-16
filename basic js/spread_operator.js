let arr1 = [3, 5, 4, 6];
let arr2 = arr1;
arr1.push(8);
let arr3 = [...arr1];
arr1.push(38);
console.log(arr2);

console.log(arr3);


function spread(name, ...args) {
    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }
    console.log(`${name}  = ${sum}`);

}
spread("Sahadev", ...arr3);