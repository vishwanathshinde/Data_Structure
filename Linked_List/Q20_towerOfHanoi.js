// Vishwanath Manik Shinde
// 2301179

function towerOfHanoi(n, source, target, auxiliary) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
      return;
    }
  
    // Move n-1 disks from source to auxiliary peg using target peg
    towerOfHanoi(n - 1, source, auxiliary, target);
  
    // Move the remaining disk from source to target peg
    console.log(`Move disk ${n} from ${source} to ${target}`);
  
    // Move the n-1 disks from auxiliary peg to target peg using source peg
    towerOfHanoi(n - 1, auxiliary, target, source);
  }
  
  // Example usage
  const numberOfDisks = 3;
  towerOfHanoi(numberOfDisks, 'A', 'C', 'B');  