let array = [23, 4, 82, 08, 98, 12]
var j = 0

for (let i = 0; i < array.length; i++) {
    let value = array[i]
    for (j = i - 1; j > -1 && array[j] > value; j--) {
        array[j + 1] = array[j]

    }
    array[j + 1] = value;

}
console.log(array)