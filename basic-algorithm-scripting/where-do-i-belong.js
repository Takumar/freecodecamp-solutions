function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) { return a-b; });

  for (var index=0; index < arr.length; index++) {
    if (arr[index] >= num) {
      break;
    }
  }
  return index;
}

where([40, 60], 50);


/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Where do I belong
Difficulty: 

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, where([20,3,5], 19) should return 2 because it is less than 20 (index 2) and greater than 5 (index 1).
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.sort()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ***********************************************
function where(arr, num) {
  // Find my place in this sorted array.
  return num;
}

where([40, 60], 50, "");
// ***********************************************
*/
