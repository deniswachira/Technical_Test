// Write a program that takes an integer as input and returns true if the input is a power of two.
function isPowerOfTwo(n) {
    if (n <= 0) return false;
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
}

console.log(isPowerOfTwo(15));  // false
console.log(isPowerOfTwo(32)); // true
