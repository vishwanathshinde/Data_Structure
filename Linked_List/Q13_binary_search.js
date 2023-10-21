// Vishwanath Manik Shinde
// 2301179

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return the index if the target is found
      } else if (arr[mid] < target) {
        low = mid + 1; // Search the right half
      } else {
        high = mid - 1; // Search the left half
      }
    }
  
    return -1; // Return -1 if the target is not found in the array
  }
  
  // Example usage
  const sortedArray = [3, 5, 7, 9, 12, 15, 18, 21];
  const targetValue = 12;
  
  const result = binarySearch(sortedArray, targetValue);
  
  if (result !== -1) {
    console.log(`Target value ${targetValue} found at index ${result}.`);
  } else {
    console.log(`Target value ${targetValue} not found in the array.`);
  }
  