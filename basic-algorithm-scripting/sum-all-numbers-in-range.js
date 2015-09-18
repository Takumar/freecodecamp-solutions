function sumAll(arr) {
  var result = 0;
  var min = 0;
  var max = 0;
  
  if (arr[0] >= arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }
  
  for (var value = min; value <= max; value++) {
    result += value;
  }
  return result;
}

sumAll([1, 4]);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Sum All Numbers in a Range
Difficulty: 

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Math.max()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

    Math.min()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

    Array.reduce()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// ***********************************************
function sumAll(arr) {
  return 1;
}
sumAll([1, 4]);
// ***********************************************
*/