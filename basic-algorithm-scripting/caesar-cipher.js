function rot13(str) { // LBH QVQ VG!
  var decoded = []; // array for single letters of given string
  var char = 0;

  // create array of codes of characters from string
  for (var i=0; i<str.length; i++) {
    decoded.push(str.charCodeAt(i));
  }

  // shift values in decoded array
  for (i=0; i<decoded.length; i++) {
    char = decoded[i];
    if(char >= 65 && char <= 90) {
      if (char > 77) {
        char -= 13;
      }
      else {
        char += 13;
      }
    }
    decoded[i] = String.fromCharCode(char); // replace code with character
  }

  return decoded.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); // should decode to "FREE PIZZA!"

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
// ***********************************************
*/
