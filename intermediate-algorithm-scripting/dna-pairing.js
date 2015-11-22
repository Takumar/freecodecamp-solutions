function pair(str) {
  var DNAStrand = [];

  function getPair(gen) {
    switch (gen) {
      case 'G': return 'C';
      case 'C': return 'G';
      case 'A': return 'T';
      case 'T': return 'A';
    }

  }

  str = str.split('');
  DNAStrand = str.map(function(val) {
    return [val, getPair(val)];
  });

 return DNAStrand;
}

pair("GCG");

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Here are some helpful links:
    Array.push()
    String.split()
// ***********************************************
*/
