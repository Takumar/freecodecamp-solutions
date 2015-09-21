function fearNotLetter(str) {
  var firstCharNr = str.charCodeAt(0);  //65
  var prevCharNr = firstCharNr; //65
  var curCharNr = 0;

  for (var i = 1; i < str.length; i++) {
    curCharNr = str.charCodeAt(i); // 66
    if (curCharNr > prevCharNr + 1) {
      return String.fromCharCode(prevCharNr + 1);
    }
    prevCharNr = curCharNr;
  }
  
 
  return undefined;
}

fearNotLetter('abce');

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Missing letters
Difficulty:?

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    String.charCodeAt()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

    String.fromCharCode()
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// ***********************************************
function fearNotLetter(str) {
  return str;
}

fearNotLetter('abce');
// ***********************************************
*/