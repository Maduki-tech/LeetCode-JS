// 704. Binary Search
// Type: Binary Search
// Author Maduki-tech

const sol = (nums: number[], target: number): number => {
  let right = nums.length - 1;
  let left = 0;
  while (left <= right) {

    let middle = Math.floor((right + left) / 2);

    if (nums[middle] === target) return middle;

    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

console.log(sol([-1, 0, 3, 5, 9, 12], 9));
