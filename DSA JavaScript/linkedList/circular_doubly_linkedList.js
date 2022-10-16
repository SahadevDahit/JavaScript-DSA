/* It's a circular doubly linked list class with methods to add a node, add a node at a given index,
delete a node at a given index, get a node at a given index, print all the nodes data and get the
size of the list. */
class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
class Circular_doubly_Linkedlist {
    constructor(head = null) {
        this.head = head;
        this.size = -1;
    }

    size() {
        return this.size;
    }
    print_nodedata() {
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current != this.head);
    }

    get_Node_atIndex(index) {
        if (index >= 0 && index <= this.size) {
            let current = this.head;
            let i = 0;
            while (current.next != this.head) {
                if (i == index) break;
                current = current.next;
                i++;
            }
            return current;


        } else {
            return null;
        }
    }

    addNode(data) {
        let new_node = new Node(data);
        if (!this.head) {
            this.head = new_node;
            new_node.next = this.head;
            new_node.prev = this.head
            this.size++;
        } else {
            let current = this.head;
            do {
                current = current.next;
            } while (current.next !== this.head)
            new_node.next = this.head;
            new_node.prev = current;
            current.next = new_node;
            this.head.prev = new_node;
            this.size++;
        }
    }
    addNode_atIndex(index, data) {
        let new_node = new Node(data);

        if (index > 0 && index <= this.size) {
            let node_atIndex = this.get_Node_atIndex(index);
            let prev_node = node_atIndex.prev;
            new_node.next = node_atIndex;
            node_atIndex.prev = new_node;
            new_node.prev = prev_node;
            prev_node.next = new_node;
            this.size++;
        } else if (index == 0) {
            //One way to add node at index 0 or head
            // let node_atIndex = this.get_Node_atIndex(this.size);
            // node_atIndex.next = new_node;
            // new_node.prev = node_atIndex;
            // new_node.next = this.head;
            // this.head.prev = node_atIndex;
            // this.head = new_node

            //Another way to add node at index 0 or head

            let prev_node = this.head.prev;
            new_node.prev = prev_node;
            prev_node.next = new_node;
            new_node.next = this.head;
            this.head.prev = new_node;
            this.head = new_node;
            this.size++;
        } else {
            console.log("Index out of range")
        }
    }
    delete_atIndex(index) {
        if (index > 0 && index <= this.size) {
            let node_atIndex = this.get_Node_atIndex(index);
            let prev_node = node_atIndex.prev;
            prev_node.next = node_atIndex.next;
            node_atIndex.next.prev = prev_node;
            this.size--;
        } else if (index == 0) {
            let prev_node = this.head.prev;
            prev_node.next = this.head.next;
            this.head.next.prev = prev_node
            this.head = this.head.next
            this.size--;
        } else {
            console.log("Index Out of range")
        }
    }
}

let obj = new Circular_doubly_Linkedlist();
obj.addNode(34)
obj.addNode(54)
obj.addNode(29)
obj.addNode(98)
obj.addNode(19)
obj.addNode_atIndex(0, 9090)
obj.delete_atIndex(4)
// console.log(obj.get_Node_atIndex(0))
obj.print_nodedata();
console.log(`Size:- ${obj.size}`)