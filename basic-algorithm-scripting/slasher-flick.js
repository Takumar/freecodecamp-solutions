function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Slasher Flick
Difficulty: 

Return the remaining elements of an array after chopping off n elements from the head.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.slice()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

    Array.splice()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// ***********************************************
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr;
}

slasher([1, 2, 3], 2, "");
// ***********************************************
*/