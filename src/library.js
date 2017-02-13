module.exports = {
  getPrimes: function (n) {
    var sieve = [], i, j, primes = [];   // Declaring variables sieve, i, j and primes
    if (n < 0) {
    throw new RangeError("Argument Error: Number must be positive");
  }

  if (Math.floor(n) !== n) {
    throw new RangeError("Argument Error: Number must be an integer");
  }
    for (i = 2; i <= n; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);            //Adding elements to the end of the array using push() method
            for (j = i << 1; j <= n; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
}