//squareRoot of the integer number
function sqrt(number) {
    if (number == 1 || number == 0)
        return number;
    let start = 1;
    let end = number;
    let ans;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (mid * mid == number) {
            return mid;
        }
        if (mid * mid < number) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }
    return ans

}
console.log(sqrt(49))



//squareRoot of the float
let square_root = (number) => {
    let threshold = 0.1;
    let start = 0,
        end = number;
    let mid;
    while ((end - start) > threshold) {
        mid = (start + end) / 2
        if (mid * mid === number) return mid;
        if (mid * mid > number) {
            end = mid;
        } else {
            start = mid
        }
    }
    return mid
}
console.log(square_root(36))