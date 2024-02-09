//Write a program that counts the number of vowels in a sentence

function countUniqueVowels(sentence) {
    const vowels = new Set("aeiouAEIOU");
    const uniqueVowels = new Set();
    for (const char of sentence) {
        if (vowels.has(char) && !uniqueVowels.has(char)) {
            uniqueVowels.add(char);
        }
    }
    return uniqueVowels.size;
}

// Example usage
const sentence = "Hello World";
const uniqueVowelCount = countUniqueVowels(sentence);
console.log(uniqueVowelCount);

