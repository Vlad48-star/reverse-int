module.exports = function reverse (n) {
    let reversed = 0;
  if(n < 0){
    n = n * (-1);
  }
  while(n) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n / 10);
      }
  return reversed
}

