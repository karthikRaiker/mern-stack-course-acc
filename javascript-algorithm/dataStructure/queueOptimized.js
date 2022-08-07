class QueueOptimized {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  print() {
    console.log(this.items);
  }
  peak() {
    return this.items[this.front];
  }
}

const queue = new QueueOptimized();
console.log(queue.isEmpty());
queue.enqueue(15);
queue.enqueue(5);
queue.enqueue(10);
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.peak());
queue.print();
console.log(queue.dequeue());
queue.enqueue(500);
queue.enqueue(1000);
queue.print();
console.log(queue.size());
