/**
 * It's a circular queue that uses an array to store data
 * @param value - The value to be enqueued.
 */
let queue = new Array();
let size = 5;
let front = rear = -1;

function enqueue(value) {
    if (front == -1 && rear == -1) {
        front = 0;
        rear = (rear + 1) % size;

        queue[rear] = value;
    } else if (((rear + 1) % size) == front) {
        console.log("No space to enqueue data");
    } else {
        queue[rear] = value;
    }
}

function dequeue() {
    if (front == -1) {
        console.log("Empty data !!! Nothing to dequeue");
    } else if (front == rear) {
        front = rear = -1
    } else {
        front = (front + 1) % size;
    }
}

enqueue(55)
enqueue(85)
enqueue(21)
enqueue(9)
enqueue(45)
dequeue()
dequeue()

for (let i = front; i < size;) {
    if (queue[front] === undefined) return;
    console.log(queue[i]);
    if (i == rear) break;
    i = (i + 1) % size;
}