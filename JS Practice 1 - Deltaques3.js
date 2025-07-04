function modifyArray(arr) {
  arr.push("New Element");  // Adds "New Element" to end
  arr.pop();                // Immediately removes last element
  return arr;               // Returns original array
}

const myArray = ["A", "B", "C"];
console.log(modifyArray(myArray));