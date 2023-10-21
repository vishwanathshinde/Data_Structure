// Vishwanath Manik Shinde
// 2301179

function fibonacciDynamic(n) {
    if (n <= 1) {
      return n;
    }
  
    // Create an array to store the Fibonacci numbers
    const fibArray = new Array(n + 1);
  
    // Initialize the first two Fibonacci numbers
    fibArray[0] = 0;
    fibArray[1] = 1;
  
    // Compute and store the Fibonacci numbers using dynamic programming
    for (let i = 2; i <= n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
  
    return fibArray[n];
  }
  
// Example usage
const n = 10;
console.log(`Fibonacci sequence up to ${n}th term: ${fibonacciDynamic(n)}`); 