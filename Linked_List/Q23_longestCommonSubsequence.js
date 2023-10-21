// Vishwanath Manik Shinde
// 2301179

function lcs(X, Y) {
    const m = X.length;
    const n = Y.length;
  
    // Create a 2D array to store the length of LCS
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  
    // Build the dp array using dynamic programming
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (X[i - 1] === Y[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    // Reconstruct the LCS
    let i = m;
    let j = n;
    const result = [];
  
    while (i > 0 && j > 0) {
      if (X[i - 1] === Y[j - 1]) {
        result.unshift(X[i - 1]);
        i--;
        j--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  
    return result.join('');
  }
  
  // Example usage
  const X = 'ABCBDAB';
  const Y = 'BDCAB';
  
  console.log(`Longest Common Subsequence: ${lcs(X, Y)}`);  