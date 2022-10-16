// function getSecondLargest(nums) {
//     let arr = [...new Set(nums)];

//     //Javascript's array member method .sort( always sorts asciibetically.
//     arr = arr.sort((a, b) => {
//         console.log(b)
//         return a - b
//     });
//     let result = arr[arr.length - 2] || arr[0];
//     return result
// }

// console.log(getSecondLargest([23, 455, 67, 32, 90]))