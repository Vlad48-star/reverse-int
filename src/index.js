module.exports = function reverse (n) {
    let reversed = 0;
    while(n) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n / 10);
      }
    return reversed
}
