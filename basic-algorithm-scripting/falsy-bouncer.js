function bouncer(arr) {
  
  function isOk(value) {
    return Boolean(value); // Boolean() return true when our argument is not false, null, 0, undefined and NaN
  }
  
  return arr.filter(isOk);
}

bouncer([7, 'ate', '', false, 9]);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Falsy Bouncer
Difficulty: 

Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Boolean Objects
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

    Array.filter()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// ***********************************************
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9], "");

// ***********************************************
*/