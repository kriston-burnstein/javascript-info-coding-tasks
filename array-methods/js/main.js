// 7/8/22

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

// 7/10/22

//TASK 3
// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]


// heads up that the problem is remove all values EXCEPT what is noted 
// keep a > index < b
// remove index < a, remove index > b

let numsArray = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++)  
  if (arr[i] < a || arr[i] > b) {        //removing if outside of interval
    arr.splice(i, 1)                     //remove, starting at index and remove 1 element
    i--
  }
}

filterRangeInPlace(numsArray, 1, 4) //remove from array numbers between 1 and 4
console.log(numsArray) //logs [3,1]

//TASK 5
//Sort in decreasing order