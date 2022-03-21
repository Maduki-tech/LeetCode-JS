// 278. First Bad Version
// Type: Binary Search
// Author Maduki-tech

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let hi = n;
    let low = 0;
    while (low < hi) {
      if (n === 1) return n;
      let middle = Math.ceil((hi + low) / 2);

      const isMiddleBad = isBadVersion(middle);

      if (isMiddleBad && !isBadVersion(middle - 1)) return middle;

      if (!isMiddleBad) {
        low = middle;
      } else {
        hi = middle;
      }
    }
  };
};
