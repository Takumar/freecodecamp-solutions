var Person = function(firstAndLast) {
  
    var fullName = firstAndLast;    
    var firstName = firstAndLast.split(' ')[0];
    var lastName = firstAndLast.split(' ')[1];
  
    this.getFirstName = function() {
      return firstName;
    };
    this.setFirstName = function(first) {
      firstName = first;
    };
  
    this.getLastName = function() {
      return lastName;
    };
    this.setLastName = function(last) {
      lastName = last;
    };
  
    this.getFullName = function() {
      return fullName;
    };
    this.setFullName = function(firstAndLast) {
      fullName = firstAndLast;
    };
  
  
    return firstAndLast;
};

var bob = new Person('Bob Ross');
//bob.setFirstName('Bob');
//bob.setLastName('Ross');
bob.getFullName();

/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Make a Person
Difficulty: 

Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Closures
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

    Details of the Object Model
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
// ***********************************************
var Person = function(firstAndLast) {
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
// ***********************************************

*/