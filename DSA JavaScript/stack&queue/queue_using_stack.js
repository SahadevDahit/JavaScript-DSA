function stack_by_queue() {
    this.stack = [];
    this.stack1 = [];
    this.size = 4;
    this.limit = -1;

}

stack_by_queue.prototype.enqueue = function (value) {
    if (this.limit < this.size) {
        this.stack.push(value);
        this.limit++;
    } else {
        console.log("Stack Overflow");
    }
}

stack_by_queue.prototype.dequeue = function () {
    while (this.limit > -1) {
        let data = this.stack.pop();
        this.stack1.push(data);
        this.limit--;
    }
    return this.stack1.pop();
}
stack_by_queue.prototype.peek = function () {

}

let obj = new stack_by_queue();
obj.enqueue(49);
obj.enqueue(06);
obj.enqueue(67);
obj.enqueue(32);
obj.enqueue(21);
console.log(obj.dequeue());
console.log(obj.dequeue());

console.log("First Stack:-" + obj.stack);
console.log("Second Stack:-" + obj.stack1);