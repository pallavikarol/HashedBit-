function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = getOddNumbers(numbers);
console.log(oddNumbers);