function countSort(array) {
    let countArr = {};
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!countArr[array[i]]) {
            countArr[array[i]] = 1;
        } else {
            countArr[array[i]]++
        }
    }


    for (let key in countArr) {
        for (let i = 0; i < countArr[key]; i++) {
            result.push(key)
        }
    };

    return result;
}
let res = countSort([0, 1, 2, 0, 2, 3, 5, 3, 2, 5, 1, 2]);
console.log(...res)