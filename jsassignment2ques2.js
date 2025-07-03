function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero";
      }
      break;
    default:
      result = "Invalid operator";
  }

  // ✅ Use backticks here
  console.log(`Result: ${result}`);
}
// Example test cases
calculate(10, 5, '+');
calculate(10, 5, '-');
calculate(10, 5, '*');
calculate(10, 0, '/');
calculate(10, 5, '%');  // Invalid operator