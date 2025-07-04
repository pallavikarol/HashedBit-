 let string = 'INDIA';

// Convert string to array
let arr = string.split(''); // ['I', 'N', 'D', 'I', 'A']

// Use splice to insert ['O', 'N', 'E', 'S'] at index 3
arr.splice(3, 0, 'O', 'N', 'E', 'S');

// Join the array back to string
let output = arr.join('');

console.log(output);  // Output: INDONESIA