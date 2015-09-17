function findLongestWord(str) {
  var wordsArray = str.split(' ');
  var longestWordIndex = 0;
  
  for (var index = 0; index < wordsArray.length; index++) {
    // console.log(wordsArray[index] + '_' + wordsArray[longestWordIndex]);
    if (wordsArray[index].length > wordsArray[longestWordIndex].length) {
      longestWordIndex = index;
    }  
  }
  return wordsArray[longestWordIndex].length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');


/*
*** 	EXERCISE DESCRIPTION	***

Bonfire: Find the Longest Word in a String
Difficulty: 

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.split()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

    String.length
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
	
// ***********************************************

function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// ***********************************************

*/