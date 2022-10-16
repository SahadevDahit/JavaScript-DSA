//Union between two sets
let setA = new Set();
let setB = new Set();
setA.add(5)
setA.add(4)
setA.add(3);
setA.add(2)
setA.add(1)
setA.add(23)

setB.add(2);
setB.add(5);
setB.add(6);
setB.add(7);
setB.add(9);
setB.add(0);

//union of two sets
/*function union(setA, setB) {
    for (let element of setA) {
        if (!setB.has(element)) {
            setB.add(element);
        }
    }
    return setB
}
let un = union(setA, setB);
console.log(un);*/


//intersection
/*function intersection(setA, setB) {

    var intersection = new Set();
    for (let element of setA) {
        if (setB.has(element)) {
            intersection.add(element);
        }

    }
    return intersection;
}
console.log(intersection(setA, setB));*/


function diff(setA, setB) {
    let diff = new Set();
    setA.forEach(function (element) {
        if (!setB.has(element)) {
            diff.add(element);
        }
    })
    return diff;
}
console.log(diff(setA, setB));