let matrixA = [
    [1, 2, 6],
    [3, 4, 2],
    [5, 6, 7]
];
let matrixB = [
    [1, 2, 4],
    [3, 4, 7],
    [5, 6, 9]
];

function multiply(matrixA, matrixB) {
    let matrixc = new Array();
    for (let i = 0; i < matrixA.length; i++) {
        let arr = []
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0
            for (let k = 0; k < matrixB.length; k++) {
                sum += matrixA[i][k] * matrixB[k][j]
            }
            arr.push(sum);
        }
        matrixc.push(arr)
        arr = []
    }
    return matrixc
}
console.log(multiply(matrixA, matrixB))


//transpose of the matrixA
function transpose(matrixA) {
    let arr = [];
    for (let i = 0; i < matrixA.length; i++) {
        arr.push([])
        for (let j = 0; j < matrixA.length; j++) {
            arr[i].push(matrixA[j][i])
        }
    }
    return arr
}
console.log(transpose(matrixA))