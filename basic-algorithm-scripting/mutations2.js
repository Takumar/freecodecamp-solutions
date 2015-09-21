function mutation(arr) {

  var searchIn = arr[0].toLowerCase();
  var searchFor = arr[1].toLowerCase();
  
  for (i = 0; i < searchFor.length; i++) {
    // searchIn.indexOf(searchFor.substring(i, i + 1))
    // easier way to search each letter: 
    if (searchIn.indexOf(searchFor[i]) < 0) {
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