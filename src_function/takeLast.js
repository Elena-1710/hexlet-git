const str = 'Tea please';
const takeLast = (text, n) => {
  if (!text || text.length < n) {
    return null;
  }
  const lastNChars = str.slice(-n);
  const reverseChars = lastNChars.split('').reverse().join('');
  return reverseChars;
};
console.log(takeLast(str, 4));
