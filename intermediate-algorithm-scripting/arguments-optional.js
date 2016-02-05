function add() {
  // calling function with one argument
  if (arguments.length===1) {
    var value = arguments[0];
    return function(arg) {
      return value + arg;
    };
  }
  // calling function with two arguments (more are omited)
  else {
    return arguments[0] + arguments[1];
  }

}
add(2,3); // should return 5
add(2)(3); // should return 5
/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, add(2, 3) should return 5, and add(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = add(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Here are some helpful links:

    Closures
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
    Arguments object
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// ***********************************************
*/
