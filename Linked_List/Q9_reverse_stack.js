// Vishwanath Manik Shinde
// 2301179

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseStack(stack) {
    const queue1 = new Queue();
    const queue2 = new Queue();
  
    // Enqueue all elements from the stack into queue1
    while (!stack.isEmpty()) {
      queue1.enqueue(stack.pop());
    }
  
    // Enqueue all elements from queue1 into queue2 to reverse the order
    while (!queue1.isEmpty()) {
      queue2.enqueue(queue1.dequeue());
    }
  
    // Enqueue all elements from queue2 back into the stack
    while (!queue2.isEmpty()) {
      stack.push(queue2.dequeue());
    }
  }
  
  // Example usage
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  myStack.push(4);
  
  console.log("Original Stack:", myStack.items);
  
  reverseStack(myStack);
  
  console.log("Reversed Stack:", myStack.items);  