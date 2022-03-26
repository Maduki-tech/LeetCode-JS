// 189. Rotate Array
// Type: Two Pointers
// Autor: Maduki-tech

function rotate(nums: number[], k: number): void {
    const len = nums.length
    if(len<k) k = k % len
       
    nums.splice(0,0,...nums.splice(len-k))  
};
