const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];  // ✅ Use i as the index
  }
  return sum;
}

console.log("Sum of array:", sumArray(numbers));