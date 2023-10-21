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
  
  function reverseString(inputString) {
    const stack = new Stack();
    
    // Push each character onto the stack
    for (let i = 0; i < inputString.length; i++) {
      stack.push(inputString[i]);
    }
  
    let reversedString = '';
  
    // Pop each character from the stack to reverse the string
    while (!stack.isEmpty()) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  // Example usage
  const inputString = "Hello, World!";
  const reversedString = reverseString(inputString);
  console.log("Original String:", inputString);
  console.log("Reversed String:", reversedString);
  