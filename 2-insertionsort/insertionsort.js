// good if checking semi sorted lists, has a good best case but worse worst case compared to quicksort/mergesort
// destructive, inplace sort
//stable sort
// can combine insertion sort + quicksort. start with insertion and if it cycles too many times change to quick


/*
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
*/

function insertionSort(nums) {
    // code goes here
  
    // starting at  second num,
    for (let i = 1; i < nums.length; i++) {
      let numberToInsert = nums[i];
      let j;
  
      // move backwards across array and insert where num is greater
      for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
        nums[j + 1] = nums[j];
      }
  
      nums[j + 1] = numberToInsert;
    }
  
    return nums;
  }
  