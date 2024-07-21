// 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

function removeNegativeNumbers(){
    let arr = []
    let i;
    for(i =0 ; i<=5; i++){
    let inputArray = parseInt(prompt('Enter an array '));
    // console.log('Array: '+inputArray)
    arr.push(inputArray)
    }
    console.log(arr);

    for(let j = 0; j<arr.length; j++){
    if(arr[j] < 0){
        console.log('Negative Number found ');
    }   

    else{
        console.log('No negative number found');
    }
    
}

}
removeNegativeNumbers()