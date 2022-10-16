function stack() {
    this.stack = []
    this.size = 4;
    this.limit = -1;
}
stack.prototype.isEmpty = function () {
    if (this.size - 1 == -1) {
        return true;
    } else {
        return false;
    }
}
stack.prototype.insert = function (value) {
    if (this.limit < this.size) {
        this.stack.push(value);
        this.limit++;
    } else {
        console.log("Stack overflow");
    }
}
stack.prototype.remove = function () {
    if (this.limit > -1) {
        this.stack.pop();
        this.limit--;
    } else {
        console.log("Empty stack");
    }
}
stack.prototype.peek = function () {
    return this.stack.length - 1;
}

let obj = new stack();
obj.insert(34);
obj.insert(98);
obj.insert(54);
obj.insert(28);

obj.remove()
obj.remove()



console.log(obj.stack)
console.log(obj.peek())
console.log("Empty:-" + obj.isEmpty());