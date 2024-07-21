// 10. Write a JavaScript program to find the index of an array item in a for loop.

// f

let items = prompt('Enter an item for which you want to find an index of that item ');
// let item = items.toLowerCase()
let bakeryItems = ['cupcakes' , 'Pastries' , 'Biscuits' , 'Patees' ,  'Chips']
console.log("Bakery Items: "+bakeryItems);
for (let i = 0; i < bakeryItems.length; i++) {
    // bakeryItems.indexOf(items)
        console.log("Index of an item: "+bakeryItems.indexOf(items));
      
}