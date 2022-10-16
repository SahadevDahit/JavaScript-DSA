let array = [23, 41, 64, 76, 34, 04, 89, 150]
array.sort(function (a, b) {
    return a - b
});


let found = false;
let m = 0;

/*
function search(element) {
    while (true) {
        m = Math.floor(array.length / 2)
        if (array[m] == element) {
            found = true;
            break;
        } else if (element > array[m]) {
            array = array.slice(m);
        } else if (element < array[m]) {
            array = array.slice(0, m)
        }
        if (m == 0) break;

    }
}
search(150); {
    found && console.log("found")
} {
    found || console.log("Not found")
}

 */


//another way
function binarySearch(arr, n) {
    let lowIndex = 0;
    let highIndex = arr.length - 1;
    while (lowIndex < highIndex) {
        let midIndex = Math.floor((highIndex + lowIndex) / 2);
        if (arr[midIndex] == n) {
            return midIndex;
        } else if (n > arr[midIndex]) {
            lowIndex = midIndex + 1;
        } else {
            highIndex = midIndex - 1;
        }
    }
    return -1;
}

// console.log(binarySearch([1, 2, 3, 4], 4));
console.log(binarySearch([1, 2, 3, 4], 14));






//using recursion
/*
let element = 04

function search(array) {
    m = Math.floor(array.length / 2)
    if (array[m] == element) {
        return "found"
    } else if (element > array[m]) {
        return search(array.slice(m));
    } else if (element < array[m]) {
        return search(array.slice(0, m))
    }
    if (m == 0) return 0


}
console.log(search(array));
*/