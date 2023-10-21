// Vishwanath Manik Shinde
// 2301179

function uniquePaths(m, n) {
    if (m === 0 || n === 0) {
      return 0; // Empty matrix has 0 paths
    }
  
    // Create a 2D array to store the number of paths to each cell
    const dp = new Array(m).fill().map(() => new Array(n).fill(0));
  
    // There is only 1 way to reach any cell in the first row or first column
    for (let i = 0; i < m; i++) {
      dp[i][0] = 1;
    }
  
    for (let j = 0; j < n; j++) {
      dp[0][j] = 1;
    }
  
    // Fill in the rest of the array using dynamic programming
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  
    return dp[m - 1][n - 1]; // Number of paths to the bottom right cell
  }
  
  // Example usage
  const m = 3;
  const n = 7;
  console.log(`Number of unique paths in a ${m}x${n} matrix: ${uniquePaths(m, n)}`);
  