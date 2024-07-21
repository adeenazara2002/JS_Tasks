// 9. Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.


//f

function smallestRoundNumber(value) {
    if (value <= 0) {
        return 0;
    }
    
    let remainder = value % 10;
    if (remainder === 0) {
        return value;
    } else {
        return value + (10 - remainder);
    }
}
let val = 123;
let smallestRound = smallestRoundNumber(val);
console.log('The smallest round number not less than ' +val +' is: '+smallestRound);
