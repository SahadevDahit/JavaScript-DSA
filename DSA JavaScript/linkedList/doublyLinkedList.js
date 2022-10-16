/* It's a doubly linked list class with methods to add, delete, and print nodes. */
class Node {
    constructor(data, prev = null, next = null) {
        this.data = data,
            this.prev = prev,
            this.next = next;
    }
}

class doublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = -1;

    }
    size() {
        return this.size;
    }
    print_Node_data() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    get_Node_atIndex(index) {
        if (index >= 0 && index <= this.size) {
            let current = this.head;
            let i = 0;
            while (current.next) {
                if (i == index) break;
                current = current.next;
                i++;
            }
            return current;
        } else {
            return null;
        }
    }
    //add node from last or rear or tail
    add_node(data) {
        let new_node = new Node(data);
        if (!this.head) {
            this.head = new_node;
            this.size++;
        } else {
            let current_node = this.head;
            while (current_node.next) {
                current_node = current_node.next;
            }
            current_node.next = new_node;
            new_node.prev = current_node;
            new_node.next = null;
            this.size++;

        }
    }

    add_Node_atIndex(index, data) {
        let new_node = new Node(data);

        if (index == 0) {
            new_node.next = this.head;
            this.head = new_node;
        } else if (index > 0 && index <= this.size) {
            let index_Node = this.get_Node_atIndex(index);
            let prevnode = index_Node.prev;
            new_node.next = index_Node;
            prevnode.next = new_node;
            this.size++;

        } else {
            console.log("Out of the Index")
        }
    }
    //delete node from index 0 to index this.size
    delete_atIndex(index) {
        if (index == 0) {
            this.head = this.head.next;
            this.size--;
        } else if (index > 0 && index <= this.size) {
            let index_Node = this.get_Node_atIndex(index);
            let prevnode = index_Node.prev;
            if (index_Node.next) {
                prevnode.next = index_Node.next
            } else {
                prevnode.next = null;
            }
            this.size--;
        } else {
            console.log("Index out of range")
        }
    }
}
let obj = new doublyLinkedList()
obj.add_node(34);
obj.add_node(09);
obj.add_node(73);
obj.add_node(98);
obj.add_node(54);
obj.add_node(102);
obj.add_Node_atIndex(5, 77)
obj.delete_atIndex(4) *
    obj.print_Node_data();

console.log(`Size :- ${obj.size}`)