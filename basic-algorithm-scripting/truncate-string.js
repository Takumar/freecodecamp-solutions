function truncate(str, num) {
  if (str.length > num) {
    return str.slice(0, num-3)+'...';
  }
  else {
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Truncate a string
Difficulty: 

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.slice()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// ***********************************************
function truncate(str, num) {
  // Clear out that junk in your trunk
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11, "");
// ***********************************************
*/