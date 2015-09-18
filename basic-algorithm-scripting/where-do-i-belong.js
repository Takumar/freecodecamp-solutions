function where(arr, num) {
  // Find my place in this sorted array.
  for (var index=0; index < arr.length; index++) {
    if (arr[index] >= num) {
      return index;
    };
  };

}

where([40, 60], 50);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Where do I belong
Difficulty: 

Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).

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