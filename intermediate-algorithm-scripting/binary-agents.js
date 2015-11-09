function binaryAgent(str) {
  var binArr = str.split(' ');
  var charArr = binArr.map(function(val) {
    return String.fromCharCode(parseInt(val, 2));
  });

  return charArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    String.charCodeAt()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

    String.fromCharCode()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

// ***********************************************
*/
