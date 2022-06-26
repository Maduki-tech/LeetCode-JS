function isPalindrom(x: number): boolean {
    if (x < 0) return false;
    let reverse = 0;
    // Remove all floating points
    // remove last number
    for (let i = x; i > 0; i = Math.trunc(i / 10)) {
        // to fill up the places
        reverse = reverse * 10 + (i % 10);
        console.log(reverse);
    }
    return reverse === x;


	// 	return x == parseInt(x.toString().split('').reverse().join(''))
}

isPalindrom(121);
