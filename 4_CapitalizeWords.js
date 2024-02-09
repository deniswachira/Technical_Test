// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.

function capitalizeWords(text) {
    return text.split(" ").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// Example usage
let text = "my name is denis wachira";
let capitalizedText = capitalizeWords(text);
console.log(capitalizedText); // Output: My Name Is Denis Wachira