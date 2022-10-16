/* This class is a linked list that can insert, delete, and print nodes. */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertfirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    insertlast(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head) {
            this.head = node
            this.size++;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }

    insertatIndex(data, index) {
        let node = new Node(data);
        let current = this.head;
        let prevnode;
        let nextnode;
        if (index > 1 && index <= this.size) {
            let i = 1;
            while (current.next) {
                if (i == index - 1) {
                    prevnode = current;
                    nextnode = current.next
                    node.next = nextnode;
                    prevnode.next = node;
                    this.size++;
                    return
                }
                current = current.next
                    ++i;
            }
        }
    }

    valueatIndex(index) {
        let current = this.head;
        let i = 1
        while (i < index) {
            current = current.next;
            i++
        }
        return current.data;
    }

    size() {
        return this.size;
    }
    printheaddata() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

    deletefirst() {
        if (!this.head) {
            console.log("No node to delete");
        } else if (this.head.next == null) {
            delete this.head
            this.size--
        } else {
            let node = this.head.next;
            delete this.head
            this.head = node
            this.size--
        }
    }
    deleteLastNode() {
        if (!this.head) {
            console.log("No Node to delete");
        } else if (this.head.next == null) {
            delete this.head
            size--
        } else {
            let current = this.head;
            let i = 1;
            while (i < this.size - 1) {
                current = current.next
                i++;
            }
            current.next = null
            console.log(current);
            this.size--;
        }
    }
    deleteAtIndex(index) {
        if (index > 1 && index < this.size) {
            if (!this.head) {
                console.log("No node to delete");
            } else {
                let i = 1;
                let current = this.head;
                while (i < index - 1) {
                    current = current.next
                    i++;
                }
                let prevnode = current;
                let nextnode = current.next.next;
                prevnode.next = nextnode;
                this.size--;
            }
        }
    }
}
const ll = new LinkedList();
ll.insertlast(30)
ll.insertlast(60)
ll.insertlast(70)
ll.insertlast(90)
ll.insertlast(120)
ll.insertlast(140)
ll.insertatIndex(69, 4)
ll.deletefirst()
ll.deleteLastNode()
ll.deleteAtIndex(2)
ll.deleteAtIndex(3)
ll.printheaddata()
console.log("Size: " + ll.size)