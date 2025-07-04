// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Function that returns a new array with each number squared using map()
function squareNumbers(arr) {
  return arr.map(function(num) {
    return num * num;
  });
}

// Call the function and store the result
let squaredNumbers = squareNumbers(numbers);

// Output the result
console.log("Original Numbers:", numbers);
console.log("Squared Numbers:", squaredNumbers);