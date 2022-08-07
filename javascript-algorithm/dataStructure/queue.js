class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peak() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(15);
queue.enqueue(10);
queue.print();
console.log(queue.isEmpty());
console.log(queue.peak());
console.log(queue.dequeue());
console.log(queue.peak());
console.log(queue.size());
queue.print();
