function sumPrimes(num) {
  // we don't have to check all numbers, only that less or equal to square root from 'num'
  var primes = new Array(num+1);
  // first search for prime numbers
  for (var i = 2; i*i <= num; i++) {
    if (primes[i] === 0) continue;
    for (var j = i*2; j<=num; j+= i) {
      primes[j] = 0;  // remove number from array of primes
    }
    
  }
  
  // calculate sum of primes
  var sum = 0;
  for (var z = 2; z <= num; z++) {
    if (primes[z] !== 0) sum += z;
  }
  return sum;
}

sumPrimes(10);



/*
*** 	EXERCISE DESCRIPTION	***
Bonfire: Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    For Loops
    Array.push()

// ***********************************************

*/