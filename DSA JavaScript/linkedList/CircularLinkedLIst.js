/* It's a circular linked list class with methods to add, delete, print and get node at a particular
index. */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class CircularLinkedList {
    constructor(head) {
        this.head = head;
        this.size = -1;
    }
    size() {
        return this.size;
    }

    print_Node() {
        let current = this.head;
        if (!current) {
            console.log("Nothing to show !!! Empty Node");
        } else {
            do {
                console.log(current.data);
                current = current.next;
            } while (current !== this.head)
        }

    }
    Node_atIndex(index) {
        if (index >= 0 && index <= this.size) {
            let i = 0;
            let current = this.head;
            while (i < this.size) {
                if (i == index) break;
                current = current.next;
                i++;
            }
            return current;

        } else {
            console.log("Invalid Index")
        }
    }
    add_Node_atHead(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.head.next = this.head;
            this.size++;

        } else {
            let last_node = this.Node_atIndex(this.size);
            last_node.next = node;
            node.next = this.head;
            this.head = node
            this.size++;
        }

    }
    addNode(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.head.next = this.head;
            this.size++;

        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            node.next = this.head;
            current.next = node;
            this.size++;
        }
    }

    add_Node_atIndex(index, data) {
        if (index > 0 && index < this.size) {
            let new_node = new Node(data);
            let node_at_index = this.Node_atIndex(index - 1);
            let next_node = node_at_index.next;
            new_node.next = next_node;
            node_at_index.next = new_node
            this.size++
        } else {
            console.log("Enter index within a size limit")
        }

    }

    delete_atIndex(index) {
        if (index > 0 && index <= this.size) {
            let node_at_index = this.Node_atIndex(index - 1)
            let next_node = node_at_index.next;
            node_at_index.next = next_node.next;
            this.size--;

        } else if (index == 0) {
            this.head = this.head.next;
            this.size--;

        } else {
            console.log("Enter index within a size limit")

        }
    }

}

let cl = new CircularLinkedList();
cl.addNode(55);
cl.addNode(67);
cl.addNode(88);
cl.addNode(23);
cl.addNode(76);


// cl.Node_atIndex(4)
cl.add_Node_atIndex(4, 45) //index and data as parameter
cl.print_Node();
console.log("\n \n =============")
cl.delete_atIndex(4) //index and data as parameter
cl.add_Node_atHead(999)
cl.print_Node();
console.log("Size:- " + cl.size)