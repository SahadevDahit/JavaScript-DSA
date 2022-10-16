/**
 * The function enqueue() adds an element to the queue and the function dequeue() removes an element
 * from the queue
 * @param value - The value to be enqueued
 */
let queue = new Array()
let size = 5;
let front = -1;
let rear = -1;

function enqueue(value) {
    if (front == -1) {
        front = 0;
        rear = 0;
        queue[rear] = value
    } else if (rear == size - 1) {
        console.log("No Space to enqueue");
    } else {
        rear = rear + 1;
        queue[rear] = value;
    }
}

function dequeue() {
    if (rear == -1) {
        console.log("Nothing to dequeue");
    } else {
        for (let i = 0; i < size - 1; i++) {
            queue[i] = queue[i + 1]
        }
        rear--
    }
}
enqueue(34)
enqueue(56)
// enqueue(28)
// enqueue(99)
// enqueue(21)
dequeue()

for (let i = 0; i <= rear; i++) {
    console.log(queue[i]);
}