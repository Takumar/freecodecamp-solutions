function titleCase(str) {
  var words = str.split(' ');
  var arr = [];
  
  for (var i = 0; i < words.length; i++) {
     arr[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
  }
  
  return arr.join(' ');
  
}

titleCase("I'm a little tea pot");

/*
*** 	EXERCISE DESCRIPTION	***

Bonfire: Title Case a Sentence
Difficulty:?

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:

    String.charAt()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

// ***********************************************
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot", "");
// ***********************************************
*/