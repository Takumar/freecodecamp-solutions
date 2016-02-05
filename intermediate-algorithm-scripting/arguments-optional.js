function add() {
  var val1 = 0,
      val2 = 0;
  var argsCount = arguments.length;
  // isNaN is not working for me because "23" is treated as number
  // Function isNum(arg) checks if arg is number
  var isNum = function(arg) {
    if (typeof arg === "number") {
      return true;
    }
    return false;
  };
  // calling function with one argument
  if (argsCount === 1) {
    val1 = arguments[0];
    if (isNum(val1)) {
      return function(arg){
        if (isNum(arg)) {
          return val1 + arg;
        }
      };
    }
  }
  // calling function with two arguments (more are omited)
  else if (argsCount > 1) {
    val1 = arguments[0];
    val2 = arguments[1];
    if (isNum(val1) && isNum(val2)) {
      return val1 + val2;
    }
  }

  return undefined;
}

var sumTwoAnd = add(2);
console.log(sumTwoAnd(3));
//add(2,3); // should return 5
//add(2)(3); // should return 5
//console.log(add("http://bit.ly/IqT6zt")); // should return undefined.
//add(2, "3"); // should return undefined.
//add(2)([3]); // should return undefined.
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
