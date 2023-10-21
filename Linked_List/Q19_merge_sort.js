// Vishwanath Manik Shinde
// 2301179

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: arrays with 0 or 1 element are already sorted
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Merge the sorted left and right halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right arrays and merge them into a single sorted array
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // If there are remaining elements in either left or right array, add them to the result
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage
  const array = [7, 2, 1, 6, 8, 5, 3, 4];
  const sortedArray = mergeSort(array);
  
  console.log("Original Array:", array);
  console.log("Sorted Array:", sortedArray);  