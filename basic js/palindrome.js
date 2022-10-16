let str = "Dahit";
let str1 = str.split("").reverse().join("");
console.log(str1);

var num = "343";
let num1 = num.split("").reverse().join("");
if (num == num1) {
    console.log("Palindrome");
} else {
    console.log("NOt palindrome");
}

let number = 3343;
let temp = number;
let number2 = 0;

while (number > 0) {
    number2 = (number % 10) + number2 * 10;
    number = (number / 10).toFixed();
}
if (number2 === temp) {
    console.log("palindrome");
} else {
    console.log("Not palindrome");
}