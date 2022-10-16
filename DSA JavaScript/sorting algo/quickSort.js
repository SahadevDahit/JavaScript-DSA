function partition(arr, start, end) {
    let pivot = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    [arr[end], arr[pivotIndex]] = [arr[pivotIndex], arr[end]];
    return pivotIndex;
}

function sort(array, start, end) {
    if (start >= end) return 0;
    let index = partition(array, start, end);
    sort(array, start, index - 1);
    sort(array, index + 1, end);
    return array;
}

let array = [23, 5, 87, 98, 12]
console.log(sort(array, 0, array.length - 1));