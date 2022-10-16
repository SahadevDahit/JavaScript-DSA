var str = "Hello I love programming ❤️ We will simulate this world 123-4567";
var abc = /[0-9]/g;
var result = str.match(abc);
var bool = abc.test(str);
console.log(bool);
if (bool == true) {
    console.log("Condition is satisfied");
}
console.log(result);
//for more go to regex 101 website