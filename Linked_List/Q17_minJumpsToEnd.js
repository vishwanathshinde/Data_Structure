// Vishwanath Manik Shinde
// 2301179

function minJumpsToEnd(arr) {
    const n = arr.length;
  
    if (n <= 1) {
      return 0; // No jumps needed for an array of length 0 or 1
    }
  
    let maxReach = arr[0]; // Maximum index that can be reached from the current position
    let steps = arr[0]; // Number of steps remaining at the current position
    let jumps = 1; // Initial jump
  
    for (let i = 1; i < n; i++) {
      if (i === n - 1) {
        return jumps; // Reached the end
      }
  
      maxReach = Math.max(maxReach, i + arr[i]);
      steps--;
  
      if (steps === 0) {
        jumps++;
  
        if (i >= maxReach) {
          return -1; // Cannot reach the end
        }
  
        steps = maxReach - i;
      }
    }
  
    return -1; // Cannot reach the end
  }
  
  // Example usage
  const array = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1];
  const result = minJumpsToEnd(array);
  
  if (result !== -1) {
    console.log(`Minimum number of jumps to reach the end: ${result}`);
  } else {
    console.log("Cannot reach the end.");
  }  