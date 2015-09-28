function myReplace(str, before, after) {
  
  after = after.split('');
  
  // we have to check if first letter is upper or lower case
  if (before[0] === before[0].toUpperCase()) {
    after[0] = after[0].toUpperCase();
  }
  else {
    after[0] = after[0].toLowerCase();
  }

  after = after.join('');

  str = str.replace(before, after);
  
 return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");  


/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Search and Replace
Difficulty: 

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.splice()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

    String.replace()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    Array.join()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// ***********************************************

*/