// Vishwanath Manik Shinde
// 2301179

function powerSet(set) {
    const result = [];
    backtrack([], 0);
  
    function backtrack(currentSubset, start) {
      result.push([...currentSubset]);
  
      for (let i = start; i < set.length; i++) {
        currentSubset.push(set[i]);
        backtrack(currentSubset, i + 1);
        currentSubset.pop();
      }
    }
  
    return result;
  }
  
  // Example usage
  const inputSet = [1, 2, 3];
  const result = powerSet(inputSet);
  
  console.log('Power Set:', result);  