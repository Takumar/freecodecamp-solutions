function diff(arr1, arr2) {
  var concatArr = arr1.concat(arr2);

  function find(value) {
    if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
      return value;
    }
  } 

  return concatArr.filter(find);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Diff Two Arrays
Difficulty: 

Compare two arrays and return a new array with any items not found in both of the original arrays.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:

    Comparison Operators
    Array.slice()
    Array.filter()
    Array.indexOf()
    Array.concat()

// ***********************************************
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// ***********************************************
*/