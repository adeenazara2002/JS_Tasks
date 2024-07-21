// 8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

// f

let angleType = parseInt(prompt("Enter an angle in degrees "));
console.log('Angle: '+angleType)

if (angleType > 0 && angleType <= 90) {
     console.log('It is an Acute angle');   
}

else if (angleType == 90) {
    console.log('It is an Right angle');   
    
}

else if (angleType >= 90 && angleType <= 180) {
    console.log('It is an Obtuse angle');   
    
}

else if (angleType == 180) {
    console.log('It is an Straight angle');   
    
}
else{
    console.log('Wrong Input!!');
}