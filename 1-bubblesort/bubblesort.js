/*
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

// function bubbleSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     // Last i elements are already in place
//     for (var j = 0; j < arr.length - i - 1; j++) {
//       // Checking if the item at present iteration
//       // is greater than the next iteration
//       if (arr[j] > arr[j + 1]) {
//         // If the condition is true then swap them
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   // Print the sorted array
//   return arr;
// }

// function bubbleSort(nums) {
//   let swapped = false;
//   do {
//     swapped = false;
//     for (let i = 0; i < nums.length; i++) {
//       // snapshot(nums);
//       if (nums[i] > nums[i + 1]) {
//         const temp = nums[i];
//         nums[i] = nums[i + 1];
//         nums[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return nums;
// }

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      for (var j = 0; j < arr.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (arr[j] > arr[j + 1]) {
          // If the condition is true then swap them
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    // Print the sorted array
    return arr;
  }
  