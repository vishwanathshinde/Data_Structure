//Vishwanath Manik Shinde
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
  
  function isBalanced(expression) {
    const stack = new Stack();
  
    // Iterate through each character in the expression
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
  
      // If the character is an opening parenthesis, push it onto the stack
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      }
      // If the character is a closing parenthesis
      else if (char === ')' || char === ']' || char === '}') {
        // Pop the top element from the stack
        const popped = stack.pop();
  
        // Check if the popped element matches the corresponding opening parenthesis
        if (
          (char === ')' && popped !== '(') ||
          (char === ']' && popped !== '[') ||
          (char === '}' && popped !== '{')
        ) {
          return false; // Unbalanced parentheses
        }
      }
    }
  
    // If the stack is empty, the parentheses are balanced
    return stack.isEmpty();
  }
  
  // Example usage
  const expression1 = "{[()]}";
  const expression2 = "{[(])}";
  const expression3 = "((()))";
  
  console.log(`${expression1} is balanced: ${isBalanced(expression1)}`);
  console.log(`${expression2} is balanced: ${isBalanced(expression2)}`);
  console.log(`${expression3} is balanced: ${isBalanced(expression3)}`);  