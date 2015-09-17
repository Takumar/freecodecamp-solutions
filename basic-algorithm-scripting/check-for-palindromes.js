function palindrome(str) {
  
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  rstr = str.split("").reverse().join("");
  
  if (str === rstr) {
    return true;
  }
  return false;
}

palindrome("eye");


/*
*** 	EXERCISE DESCRIPTION	***

Bonfire: Check for Palindromes
Difficulty: 

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
You'll need to remove punctuation and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.replace()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    String.toLowerCase()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
	
// ***********************************************
function palindrome(str) {
  return true;
}
palindrome("eye");

// ***********************************************

*/