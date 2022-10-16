/* Sorting the array in ascending order. */
let arr = [23, 23, 47, 498, 34, 32, 87]
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
        if (arr[i] > arr[j + 1]) { //for descending just change > to <
            let temp = arr[i];
            arr[i] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
let sortedarray = arr.sort(function (a, b) {
    return a - b
})

console.log(sortedarray)