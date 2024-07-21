// 5. Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.


function checkIntegerRange() {
    let int1 = parseInt(prompt('Enter first number '))
console.log('First Number '+int1);
let int2 = parseInt(prompt('Enter Second number '))
console.log('Second Number '+int2);
let flag = true

if(int1 == 50-99 && int2 == 50-99){
    // console.log('The given values are');
    return flag
}
else{
    flag = false
}

}
checkIntegerRange();



