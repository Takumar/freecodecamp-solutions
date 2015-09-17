function largestOfFour(arr) {
  var resultArr = []; // here we put maximum values from each sub array
  var max_value = 0; // value representing currently maximum found value
  var current_value = 0; // we put here value from sub array to not check it every time in array
  // first we loop through sub arrays
  for (var ind_y = 0; ind_y < arr.length; ind_y++) {
    // we initialize variable max_value which represents maximum value in sub array
    max_value = arr[ind_y][0];
    // next we iterate through elements of sub array
    for (var ind_x = 1; ind_x < 4; ind_x++) {
      current_value = arr[ind_y][ind_x];
      if (current_value >= max_value) {
        max_value = current_value;
      }
    }
    resultArr[ind_y] = max_value;
  }
  
  return resultArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
*** 	EXERCISE DESCRIPTION	***

Bonfire: Return Largest Numbers in Arrays
Difficulty: 

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Comparison Operators
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
	
// ***********************************************

function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], "");

// ***********************************************

*/