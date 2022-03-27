// 344 Reverse String
// Type: Two Points
// Author: Maduki-tech


function reverseString(s: string[]): void{
	let length = s.length;
	for (let i = 0; i < length; i++){
		let temp = s[i];
		s[i] = s[length - 1];
		s[length - 1] = temp;
		length--
		console.log(s, 'length: ', length, 'i', i);
	}
}


reverseString(['h','e','l','l','o']);
