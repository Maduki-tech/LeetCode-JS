// 977. Squares of a Sorted Array
// Type: Two Pointers
// Author: Maduki-tech

function sortedSquares(nums: number[]): number[] {
  let arr = [];
  for (var i = 0; i < nums.length; i++) {
    arr[i] = Math.pow(nums[i], 2);
  }

  bubblesort(arr);
  return arr;
}

// TODO: Adding other Sorting Algorithm
function bubblesort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
