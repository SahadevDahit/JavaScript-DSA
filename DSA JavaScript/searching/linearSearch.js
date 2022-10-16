const findNumber = (array, num) => {
    //O(n)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            console.log("Found Number")
            return 1
        }
    }
    return -1
}
let linear_search = findNumber([23, 56, 87, 928, 37, 96, 56], 37)
console.log(linear_search)