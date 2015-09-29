function sumFibs(num) {
  
  var fibArr = [1, 1];
  var index =  2;
  var sum = 0;
  var i = 0;
  
  if (num < 1) return 0;
  if (num === 1) return 2;
  
  // prepare array of Fibonacci numbers
  while (i <= num) {
    // i will contain next Fibonacci number
    i = fibArr[index-2] + fibArr[index-1];
    fibArr.push(i);
    index++;
    
  }
  
  for (var j = 0; j < fibArr.length; j++) {
    if ((fibArr[j]%2 === 1) && (fibArr[j] <= num)) {      
      sum += fibArr[j];
    }
  }
  
  return sum;
}

sumFibs(4); 


/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Sum All Odd Fibonacci Numbers
Difficulty: 

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Remainder
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25)

// ***********************************************

*/