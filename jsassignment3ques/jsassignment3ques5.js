function correctfn(str, wrong, correct) {
    return str.replace(wrong, correct);
}

let sentence = "I luv udaipur";
let result = correctfn(sentence, "luv", "love");

console.log(result);