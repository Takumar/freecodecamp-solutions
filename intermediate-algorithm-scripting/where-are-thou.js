function where(collection, source) {
  var check = arguments[1];
//console.log(check);
  var arr = [];

  for (var i = 0; i < collection.length; i++){
    console.log(Object.keys(check));
    console.log(collection[i].hasOwnProperty(Object.keys(check)));

    if (collection[i].hasOwnProperty(Object.keys(check)) && collection[i][Object.keys(check)] === check[Object.keys(check)]) {
      arr.push(collection[i]);
    }





  }
console.log(arr);    
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
//where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

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
