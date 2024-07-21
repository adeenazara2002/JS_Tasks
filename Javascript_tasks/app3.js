// 3. Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.

// f

function countVowels(str){
    let vowels = 'aeiouAEIOU'
    let count  = 0;

    for (let char of str){
        if (vowels.includes(char)) {
            count ++;
        }
    }
    return count

    }
    countVowels('Adina')

