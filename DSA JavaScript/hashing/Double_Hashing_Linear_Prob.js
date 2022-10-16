 function Double_Hashing_Probing(size) {
     this.size = size;
     this.keys = new Array(size).fill(null);
     this.values = new Array(size).fill(null);
     this.limit = 0;
 }

 Double_Hashing_Probing.prototype.put = function (key, value) {
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

 Double_Hashing_Probing.prototype.get = function (key) {
     let index_value = this.hash(key);
     while (this.keys[index_value] != key) {
         index_value++;
         index_value = index_value % this.size;
     }
     console.log(this.values[index_value]);
 }

 Double_Hashing_Probing.prototype.hash = function (key) {
     let R = this.size - 2;
     return hashed = R - key % R;

 }
 let obj = new Double_Hashing_Probing(10);
 obj.put(23, "apple");
 obj.put(2, "papaya");
 obj.put(3, "cat");
 obj.put(21, "robin");
 obj.put(09, "pepe");
 obj.put(17, "gallon");
 obj.put(4, "mango");
 obj.put(20, "zebra");
 console.log(obj)