const amount = document.getElementById("amount");
const tenure = document.getElementById("tenure");
const rate = document.getElementById("rate");

const amountLabel = document.getElementById("amountLabel");
const tenureLabel = document.getElementById("tenureLabel");
const rateLabel = document.getElementById("rateLabel");

const principal = document.getElementById("principal");
const interest = document.getElementById("interest");
const maturity = document.getElementById("maturity");

function formatINR(num) {
  return "₹" + num.toLocaleString("en-IN");
}

function calculateFD() {
  const P = Number(amount.value);
  const r = Number(rate.value) / 100;
  const t = Number(tenure.value) / 12;

  // Simple FD compound annually
  const maturityAmount = Math.round(P * Math.pow(1 + r, t));
  const interestEarned = maturityAmount - P;

  amountLabel.innerText = formatINR(P);
  tenureLabel.innerText = tenure.value + " Months";
  rateLabel.innerText = rate.value + "% p.a.";

  principal.innerText = formatINR(P);
  interest.innerText = formatINR(interestEarned);
  maturity.innerText = formatINR(maturityAmount);
}

amount.addEventListener("input", calculateFD);
tenure.addEventListener("input", calculateFD);
rate.addEventListener("input", calculateFD);

calculateFD();
