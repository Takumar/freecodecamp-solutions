function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    if (str.substr(-target.length, target.length) === target) {
      return true;
    };
  return false;
}

end('Bastian', 'n');

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Confirm the Ending
Difficulty: 

Check if a string (first argument) ends with the given target string (second argument).
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.substr()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// ***********************************************
function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

end("Bastian", "n", "");
// ***********************************************
*/