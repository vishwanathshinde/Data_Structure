// Vishwanath Manik Shinde
// 2301179

class Stack {
    constructor() {
      this.top = null;
    }
  
    push(ele) {
      var node = new newNode(ele);
      node.next = this.top;
      this.top = node;
    }
  
    pop() {
      var temp = this.top;
      if (temp) {
        this.top = this.top.next;
        temp.next = null; // Properly remove the reference
      }
    }
  
    display() {
      var temp = this.top;
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
  
  class newNode {
    constructor(data, next) {
      this.data = data;
      this.next = null;
    }
  }
  
  const myStack = new Stack(); // Use a different name for your stack instance
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  myStack.push(40);
  myStack.push(50);
  
  console.log("After PUSH...");
  myStack.display();
  
  myStack.pop();
  console.log("After POP...");
  myStack.display();
  
  myStack.pop();
  console.log("After POP...");
  myStack.display();
  