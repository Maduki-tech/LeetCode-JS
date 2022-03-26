// 283. Move Zeroes
// Type: Two Points
// Author: Maduki-tech


function moveZeroes(nums: number[]):void {
	let left = 0;

	for( let i = 0;i < nums.length;i++ ){
		if(nums[i] !== 0){
			let temp = nums[i];
			nums[i] = nums[left];
			nums[left] = temp;
			left++;
		}
	}
}
