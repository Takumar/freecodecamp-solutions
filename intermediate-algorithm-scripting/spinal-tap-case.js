function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-zA-Z])([A-Z])/g, '$1_$2');
  str = str.replace(/_|\s+/g, '-');

  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');



/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Spinal Tap Case 

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

  RegExp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// ***********************************************
*/