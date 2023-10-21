function countWaysToClimbStairs(n) {
    // Base cases
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Recursive case: number of ways to climb n stairs is the sum of ways to climb (n-1) and (n-2) stairs
    return countWaysToClimbStairs(n - 1) + countWaysToClimbStairs(n - 2);
  }
  
  // Example usage
  const numberOfSteps = 4;
  const waysToClimb = countWaysToClimbStairs(numberOfSteps);
  
  console.log(`Number of distinct ways to climb ${numberOfSteps} stairs: ${waysToClimb}`);
  