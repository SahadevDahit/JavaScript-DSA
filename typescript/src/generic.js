function generic(a, b) {
    return b ? [a, b] : [a];
}
console.log(generic(12, 54));
console.log(generic("Sahadev ", "Dahit"));
console.log(generic([12, 34]));
