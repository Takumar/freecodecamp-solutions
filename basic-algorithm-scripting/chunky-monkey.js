function chunk(arr, size) {
    // Break it up.

    var tempArray = [];
    var i = 0;

    while (i < arr.length) {
      tempArray.push(arr.slice(i, i+size));
      i += size;
    }

    return tempArray;
  }

  chunk(['a', 'b', 'c', 'd'], 2);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Chunky Monkey
Difficulty: 

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.push()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
	
// ***********************************************
function chunk(arr, size) {
  // Break it up.
  return arr;
}

chunk(["a", "b", "c", "d"], 2, "");
// ***********************************************

*/