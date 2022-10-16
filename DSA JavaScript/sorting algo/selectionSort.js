let array = [37, 1, 57, 24, 87, 54]

//Time Complexity: O(n^2)
//Space Complexity: O(1)
for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min])
            min = j;
    }
    if (i !== min) {
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }


}
console.log(array);