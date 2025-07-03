let num1 = 6;
let num2 = 34;

function calculate(num1, num2) {
  let answer;

  answer = ((num1 % 10) * (num2 % 10)) + (parseInt(num1 / 10) * parseInt(num2 / 10));

  console.log(answer);
}

calculate(num1, num2);