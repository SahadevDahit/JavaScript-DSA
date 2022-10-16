function stack_using_queue() {
    this.queue = [];
    this.size = 5;
    this.limit = -1;
}
stack_using_queue.prototype.push = function (value) {
    if (this.limit < this.size) {
        this.queue.push(value);
        this.limit++;
    }
}

stack_using_queue.prototype.pop = function () {
    let temp = []
    if (this.limit > -1) {
        while (this.limit > 0) {
            temp.push(this.queue.shift());
            this.limit--;
        }
        console.log(this.queue.shift());
        this.queue = temp;
    } else {
        console.log("Empty data")
    }
}

let obj = new stack_using_queue();
obj.push(23);
obj.push(78);
obj.push(30);
obj.push(07);
obj.pop();
console.log(obj.queue)