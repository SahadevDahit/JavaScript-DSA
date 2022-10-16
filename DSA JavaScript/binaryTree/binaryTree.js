class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Binary_Tree {
    constructor(root) {
        this.root = root;
    }

    addNode(data) {

        let new_node = new Node(data);
        let parent = null;
        let current = this.root;
        while (current != null) {
            parent = current;
            if (data > current.data) {
                current = current.right;
            } else {
                current = current.left;

            }
        }
        if (parent == null) {
            this.root = new_node;
            return;
        };
        if (parent.data > data) {
            parent.left = new_node;
        } else {
            parent.right = new_node;
        }


    }
    // addNode(data) {
    //     let new_node = new Node(data);
    //     if (!this.root) {
    //         this.root = new_node;
    //     } else {
    //         let current_node = this.root
    //         while (current_node) {
    //             if (!current_node) break;
    //             if (current_node.data < data) {
    //                 if (current_node.right) {
    //                     current_node = current_node.right;
    //                 } else {
    //                     current_node.right = new_node;
    //                     break;
    //                 }
    //             } else if (current_node.data > data) {
    //                 if (current_node.left) {
    //                     current_node = current_node.left;
    //                 } else {
    //                     current_node.left = new_node;
    //                     break;
    //                 }
    //             } else {
    //                 break;
    //             }
    //         }
    //     }

    // }

    //pre-Order traversal
    preOrder() {
        console.log("Binary Traversal in pre-Order")
        this.pre_Order(this.root)
    }
    pre_Order = (root) => {
        if (root !== null) {
            console.log(root.data);
            this.pre_Order(root.left);
            this.pre_Order(root.right);
        }
    }
    //In order
    inOrder() {
        console.log("Binary traversal in In-Order");
        this.in_Order(this.root);
    }
    in_Order(root) {
        if (root !== null) {
            this.in_Order(root.left);
            console.log(root.data);
            this.in_Order(root.right)

        }
    }
    //post Order
    postOrder() {
        console.log("Binary traversal in Post-Order");
        this.post_Order(this.root);
    }
    post_Order(root) {
        if (root !== null) {
            this.post_Order(root.left);
            this.post_Order(root.right)
            console.log(root.data);

        }
    }

    //check the balanced tree or not??

    height_binaryTree(node = this.root) {
        if (node === null) {
            return 0;
        };

        let l_depth = this.height_binaryTree(node.left);
        let r_depth = this.height_binaryTree(node.right);
        if (l_depth < r_depth) {
            ++l_depth;
        } else {
            ++r_depth;
        }
        return Math.max(r_depth, l_depth);


    }
    delete(value) {
        return this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        console.log(root)
        if (!root) {
            return null;
        } else if (value < root.data) {
            root.left = delete(root.left, value);

        } else if (value > root.data) {
            root.right = delete(root.right, value);


        } else {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                root = root.right;
                return root;
            } else if (!root.right) {
                root = root.left;
                return root;
            } else {
                let temp = findMin(root.right);
                root.right = delete(root.right, temp.data);
                return root;
            }
        }

        function findMin(root) {
            while (root.left) {
                root = root.left;
            }
            return root.data;

        }


    }
}


let obj = new Binary_Tree();
obj.addNode(12);
obj.addNode(15);
obj.addNode(10);
obj.addNode(14);
obj.addNode(17);
obj.addNode(16);
obj.addNode(11);
obj.addNode(8);
obj.addNode(5);
obj.addNode(9);

obj.addNode(34);
obj.addNode(30);
obj.addNode(45);

obj.addNode(35);
obj.addNode(50);
obj.addNode(2);
obj.addNode(7);


// obj.delete(50)

obj.preOrder()
obj.inOrder();
obj.postOrder()
console.log("=====Height of the Binary Tree========")
console.log("Height:-" + obj.height_binaryTree())