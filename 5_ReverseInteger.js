// Write a program that takes an integer as input and returns an integer with reversed digit 
// ordering.

function reverseInteger(num) {
    let reversed = 0;
    const sign = Math.sign(num);
    num = Math.abs(num);

    while (num > 0) {
        const digit = num % 10;
        if (reversed > Math.floor(Number.MAX_SAFE_INTEGER / 10) ||
            (reversed === Math.floor(Number.MAX_SAFE_INTEGER / 10) && digit > 7)) {
            return 0;
        }
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reversed * sign;
}


console.log(reverseInteger(-26)); // Output: -62