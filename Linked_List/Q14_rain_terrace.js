// Vishwanath Manik Shinde
// 2301179

function rainTerraces(terraces) {
    const n = terraces.length;
  
    // Initialize arrays to store the maximum heights from the left and right for each terrace
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
  
    // Initialize variables to store the maximum heights from the left and right
    let maxLeft = 0;
    let maxRight = 0;
  
    // Calculate the maximum heights from the left for each terrace
    for (let i = 0; i < n; i++) {
      leftMax[i] = maxLeft;
      maxLeft = Math.max(maxLeft, terraces[i]);
    }
  
    // Calculate the maximum heights from the right for each terrace
    for (let i = n - 1; i >= 0; i--) {
      rightMax[i] = maxRight;
      maxRight = Math.max(maxRight, terraces[i]);
    }
  
    // Calculate the trapped water for each terrace
    let totalWater = 0;
    for (let i = 0; i < n; i++) {
      const minHeight = Math.min(leftMax[i], rightMax[i]);
      if (minHeight > terraces[i]) {
        totalWater += minHeight - terraces[i];
      }
    }
  
    return totalWater;
  }
  
  // Example usage
  const terraces = [3, 0, 0, 2, 0, 4];
  const trappedWater = rainTerraces(terraces);
  
  console.log(`The amount of trapped water is: ${trappedWater} units.`);  