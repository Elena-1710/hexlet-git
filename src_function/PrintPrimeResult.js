const isPrime = (num) => {
  if (num <= 0) {
    return false;
  }
  if (num <= 1) return false;
  for (let i = 1; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};
console.log(isPrime(-4));

const PrintPrimeResult = (num) => {
  const result = isPrime(num);
  if (!result) { console.log('no'); } else {
    console.log('yes');
  }
};
PrintPrimeResult(-4);
