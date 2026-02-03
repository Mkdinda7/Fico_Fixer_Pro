const salaryInput = document.getElementById("salaryInput");
const salaryRange = document.getElementById("salaryRange");

salaryRange.addEventListener("input", () => {
  salaryInput.value = salaryRange.value;
  calculate();
});

salaryInput.addEventListener("input", () => {
  salaryRange.value = salaryInput.value;
  calculate();
});

function calculate() {
  const salary = Number(salaryInput.value);

  let interestRate = 0.035;
  if (salary > 5000) interestRate = 0.05;
  if (salary > 25000) interestRate = 0.065;
  if (salary > 100000) interestRate = 0.07;

  const monthlySavings = Math.round(salary * 0.2);
  const yearlyInterest = Math.round(salary * 12 * interestRate / 100);
  const annualBenefits = 60;
  const totalValue = monthlySavings * 12 + yearlyInterest + annualBenefits;

  document.getElementById("interestRate").innerText =
    (interestRate * 100).toFixed(1) + "%";
  document.getElementById("monthlySavings").innerText = monthlySavings;
  document.getElementById("interestEarned").innerText = yearlyInterest;
  document.getElementById("annualBenefits").innerText = annualBenefits;
  document.getElementById("totalValue").innerText = totalValue;
}

calculate();
