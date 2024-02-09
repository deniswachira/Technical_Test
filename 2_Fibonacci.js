// Write a program to generate the Fibonacci sequence up to 100.

function fibonacci() {
    let sequence = [];
    // Initialize with the first two numbers
    sequence[0] = 0;
    sequence[1] = 1;

    // Generate the sequence up to n
    for (let i = 2; i < 100; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}

console.log(fibonacci());