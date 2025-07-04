let str = "Coding is super fun in Udaipur!"; // ✅ more than 20 characters

let vowels = 0;
let consonants = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= 'a' && ch <= 'z') {
        if ("aeiou".includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);