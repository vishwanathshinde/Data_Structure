// Vishwanath Manik Shinde
// 2301179

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: arrays with 0 or 1 element are already sorted
    }
  
    const pivot = arr[0]; // Choose the first element as the pivot
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort the left and right subarrays and concatenate them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage
  const array = [7, 2, 1, 6, 8, 5, 3, 4];
  const sortedArray = quickSort(array);
  
  console.log("Original Array:", array);
  console.log("Sorted Array:", sortedArray);
  