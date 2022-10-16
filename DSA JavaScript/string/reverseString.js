/**
 * Split the string into an array, reverse the array, and join the array back into a string.
 * @param string - The string to be reversed.
 * @returns "vedahadahS"
 */
const reverseString = (string) => {
    return string.split("").reverse().join("");
}
console.log(reverseString("Sahadev"));

/* The above code is checking if the sum of two consecutive numbers in the array is zero. */
let array = [2, 3, 21, 32, 41, -42, -87, 87];
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + array[i + 1] == 0) {
        console.log("Sum Zero array ");
    }
}

let num = "5";
console.log(typeof (num))
console.log(parseInt(num))