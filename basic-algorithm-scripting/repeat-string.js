function repeat(str, num) {
  
  var result = '';
  
  if (num >= 0) {
    for (var i = 0; i < num; i++) {
      result += str;
    }
    return result;
  }
  else {
    return '';
  }
  
}

repeat('abc', 3);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Repeat a string repeat a string

Difficulty: 

Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Global String Object
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
	
// ***********************************************

function repeat(str, num) {
  // repeat after me
  return str;
}

repeat("abc", 3, "");

// ***********************************************

*/