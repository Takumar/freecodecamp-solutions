function translate(str) {
  var vowelIdx = str.search(/[aeiou]/);

  if (vowelIdx <= 0) return str + "way";
  else return str.substr(vowelIdx) + str.substr(0, vowelIdx) + "ay";
}

translate("consonant");

translate("paragraphs"); //should return "aragraphspay".translate("paragraphs")
translate("glove"); //should return "oveglay".
translate("algorithm"); //should return "algorithmway".
translate("eight"); // should return "eightway".

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Pig Latin
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/
