function convert(str) {
  // &colon;&rpar;
  var chars = "&<>\"\'";
  var entities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  var result = [];

  for (var i = 0; i < str.length; i++) {
    var idx = chars.indexOf(str[i]);
    if (idx < 0) {
      result.push(str[i]);
    }
    else {
      result.push(entities[idx]);
    }
  }

  return result.join('');
}

convert("Dolce & Gabbana");
convert("Hamburgers < Pizza < Tacos"); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
convert("Sixty > twelve"); // should return Sixty &​gt; twelve.
convert('Stuff in "quotation marks"'); // should return Stuff in &​quot;quotation marks&​quot;.
convert("Shindler's List"); // should return Shindler&​apos;s List.
convert("<>"); // should return &​lt;&​gt;.
convert("abc"); //should return abc.


/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:

  RegExp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  HTML Entities
  http://dev.w3.org/html5/html-author/charref
*/
