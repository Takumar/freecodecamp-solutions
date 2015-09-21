function drop(arr, func) {

  var shifted = arr.slice();
  var i = 0;
  var numOfElems = arr.length;
  
  while (i < numOfElems) {
      if (!func(arr[i])) {
        shifted.shift();
      }
      else {
          break;
      }
      
      i++;
  }

  return shifted;
}



drop([1, 2, 3], function(n) {return n < 3; });


/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Drop it
Difficulty: 

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Arguments object
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

    Array.shift()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// ***********************************************
// ***********************************************
*/