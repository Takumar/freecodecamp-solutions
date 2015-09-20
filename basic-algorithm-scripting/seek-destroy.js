function destroyer(arr) {
    var elementsToRemove = [];
    // remove elements given to function as parameters in arguments variable
    for (var i = 1; i < arguments.length; i++) {
        elementsToRemove.push(arguments[i]);
    }
  
  function isEqual(value) {
    var i = 0;

    while (i < elementsToRemove.length) {
      if (value === elementsToRemove[i]) {
        return false;
      }
      i++;
    } 
 
    return true;
 
 }
  
  arr = arr.filter(isEqual);
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Seek and Destroy
Difficulty: 

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arguments object
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

    Array.filter()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// ***********************************************
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");
// ***********************************************
*/