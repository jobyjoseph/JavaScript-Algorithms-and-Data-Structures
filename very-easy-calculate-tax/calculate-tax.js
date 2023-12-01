function printTaxAmount(amount) {
  amount >= 50000 ? console.log(amount * 0.1) : console.log(amount * 0.05);
}

printTaxAmount(50000); // 5000
printTaxAmount(30000); // 1500
printTaxAmount(80000); // 8000
