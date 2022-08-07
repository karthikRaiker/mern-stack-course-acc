//Why stack is used when we have array?
//because stack follows LIFO principle, where element insertion,deletion,access takes place in O(1) time complexity
//where in array if we insert in random insertion or deletion it takes O(n) time complexity.
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(50);
stack.push(5);
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());
stack.pop();
stack.print();
