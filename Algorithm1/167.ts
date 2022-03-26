// 167. Two Sum 2
// Type: Two Points
// Author: Maduki-tech

function twoSum(numbers: number[], target: number): number[] {
  let start = 0;
  let ende = numbers.length - 1;

  while (start < ende) {
    let sum = numbers[start] + numbers[ende];

    if (sum === target) {
      return [start + 1, ende + 1];
    } else if (sum > target) {
      ende--;
    } else {
      start++;
    }
  }
}
