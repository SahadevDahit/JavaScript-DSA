function linearHashing(size) {
    this.size = size;
    this.keys = new Array(size).fill(null);
    this.values = new Array(size).fill(null);
    this.limit = 0;
}
linearHashing.prototype.put = function (key, value) {
    if (this.limit >= this.size) throw "Space is full";
    let index_value = this.hash(key);
    while (this.keys.includes(index_value)) {
        index_value++;
        index_value = index_value % this.size;

    }
    this.keys[index_value] = key;
    this.values[index_value] = value;
    this.limit++;
}


linearHashing.prototype.get = function (key) {
    let index_value = this.hash(key);
    while (this.keys[index_value] != key) {
        index_value++;
        index_value = index_value % this.size;
    }
    console.log(this.values[index_value]);

}
linearHashing.prototype.hash = function (key) {
    if (Number.isInteger(key)) {
        return hashed = parseInt(key % this.size)
    }
}

let obj = new linearHashing(10)

obj.put(3, "Sahadev");
obj.put(1, "Dahit")
obj.put(13, "Nature")
obj.put(9, "love")
obj.put(19, "doggy")

obj.get(19)