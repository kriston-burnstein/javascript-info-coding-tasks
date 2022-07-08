//

//JS.INFO - ARRAY METHODS

// TASK 1
// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.


// A

function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
}

console.log(camelize('i-love-you'))

// SOLUTION WITH EXPLANATION AND BETTER FORMATTING FROM DOC

// function camelize(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }

// TASK 2
// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// A

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b)
}

let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)

console.log(filtered)  //3,1 matching values
console.log(arr)  //5,3,8,1 not modified

