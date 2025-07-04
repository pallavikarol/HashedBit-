function repeatedDigitSum(num) {
  while (num >= 10) {
    let sum = 0;
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    num = sum;
  }
  return num;
}

console.log(repeatedDigitSum(456)); // Output: 6