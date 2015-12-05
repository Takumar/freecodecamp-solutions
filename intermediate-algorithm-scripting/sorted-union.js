function unite(arr1, arr2, arr3) {
  var args = [],
      bigArr = [],
      unitedArr = [];
    
  args = Array.prototype.slice.call(arguments);
  // Concatenate all arrays into one 'bigArr'
  for (var i = 0; i < args.length; i++) {
    bigArr = bigArr.concat(args[i]);
  }
  // remove repeating values
  unitedArr = bigArr.filter(function(val, index) {
    return (bigArr.indexOf(val) === index);
  });

  return unitedArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
unite([1, 3, 2], [1, [5]], [2, [4]]);
unite([1, 2, 3], [5, 2, 1]);
unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

Array.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// ***********************************************
*/
