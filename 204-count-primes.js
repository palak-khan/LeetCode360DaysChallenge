// Sieve of Eratosthenes algorithm to count primes less than n

var countPrimes = function (n) {
  if (n <= 2) return 0;

  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const count = isPrime.filter(Boolean).length;
  console.log(count);
  return count;
};
