let array = [23, 1, 53, 83, 98, 21]


for (let i = 0; i < array.length - 1; i++) {

    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
console.log(array)

//Time Complexity: O(n^2)
// Space Complexity: O(1)