function findTax(salary) {
  let tax;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      tax = salary * 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      tax = salary * 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      tax = salary * 0.20;
      break;
    case (salary > 1500000):
      tax = salary * 0.30;
      break;
    default:
      tax = 0;
      console.log("Invalid salary amount");
  }

  console.log(`Tax on ₹${salary} = ₹${tax}`);
  return tax;
}

// Example tests
findTax(450000);   // 0%
findTax(750000);   // 10%
findTax(1200000);  // 20%
findTax(2000000);  // 30%
findTax(-50000);   // Invalid