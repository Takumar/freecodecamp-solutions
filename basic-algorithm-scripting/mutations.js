function mutation(arr) {
  // first we prepare string to compare ignoring case
  var textToCheck = arr[0].toLowerCase();
  var lettersToFind = arr[1].toLowerCase();
  // now we search letters from str2 in text str1
  // when we don't find any letter we return false
  for (var i=0; i<lettersToFind.length; i++) {
    if (textToCheck.indexOf(lettersToFind[i]) < 0) {
      return false;
    }
  }
  
  return true;
}

mutation(['hello', 'hey']);

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Mutations
Difficulty: 

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.indexOf()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// ***********************************************
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"], "");
// ***********************************************
*/