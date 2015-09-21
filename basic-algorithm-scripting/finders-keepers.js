function find(arr, func) {

  var num = arr.some(func);
  if (num === false) {
      return undefined;
  }

  for(var i=0; i<=arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr[i];
    }
  }

}

find([1, 4, 3, 3], function(num){ return num % 2 === 0; });

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Finders Keepers
Difficulty: 

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.some()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// ***********************************************

// ***********************************************
*/