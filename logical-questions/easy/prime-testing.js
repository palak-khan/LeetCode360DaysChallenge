function prime_check(n) {
  if (typeof n !== "number" || n <= 1) {
    console.log("Wrong Input");
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    console.log(i)
    if (n % i === 0) return false; 
  }

  return true;
}

let ans = prime_check(12);
console.log(ans);
