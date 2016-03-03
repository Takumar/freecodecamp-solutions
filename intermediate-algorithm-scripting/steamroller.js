function steamroller(arr) {
  // I'm a steamroller, baby
  if (arr.length === 0) {
    return [];
  }
  var newArr = [];

  if (Array.isArray(arr[0])) {
    newArr = steamroller(arr[0]);
  }
  else {
    newArr.push(arr[0]);
  }


  for (var i = 1; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      arr[i] = steamroller(arr[i]);
    }
    newArr = newArr.concat(arr[i]);
  }
  return newArr;
}

//steamroller([1, [2], [3, [[4]]]]);
//steamroller([[["a"]], [["b"]]]); // should return ["a", "b"].
//steamroller([1, [2], [3, [[4]]]]); // should return [1, 2, 3, 4].
//steamroller([1, [], [3, [[4]]]]); // should return [1, 3, 4].
steamroller([1, {}, [3, [[4]]]]); // should return [1, {}, 3, 4].

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

// ***********************************************
*/
