let obj1 = [{
    name: "Sahadev",
    age: 21
}]

obj2 = [{

    name: "Hunk",
    age: 33
}];
const list = {
    name: "love",
    age: 24
}

const obj3 = [...obj2, list]
obj3[1] = {
    ...obj3[1],
    name: "Change",
    age: 69
}
console.log(obj3);