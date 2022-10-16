//Closure is the property in which the inner function defined inside the
//outer function has ability to access the variables defined in outer 
//function and global variables

outer = (outerValue) => {
    inner = (innerValue) => {
        // return (innerValue + outerValue);
        console.log(innerValue + outerValue);
    }
    inner(5);
}

let inn = outer(5);
//console.log(inn);