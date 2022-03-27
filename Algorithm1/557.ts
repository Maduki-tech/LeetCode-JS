// 557. Reverse Words in a String 3
// Type: Two Points
// Author: Maduki-tech

function reverseString(s: string): string {
	let res = "";
	let arr = s.split(" ")

	for(let i = 0; i < arr.length; i++){
		for(let j = arr[i].length - 1; j >= 0 ; j--){
			res += arr[i][j]
		}
		if(i != arr.length - 1) res += " "
	}
	return res;
}

reverseString("Let's take LeetCode contest");
