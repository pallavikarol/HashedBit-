function countWords(paragraph) {
  let words = paragraph.trim().split(/\s+/); // split by any white space
  return words.length;
}

let para = "JavaScript is easy to learn and fun to use!";
console.log(countWords(para));  // Output: 9