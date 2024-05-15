const resetBtn = document.querySelector(".reset-btn");
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector(".people-input");
const peopleInputValue = document.querySelector(".number-of-people");
const tipOptions = document.querySelectorAll(".tip-option");
const totalAmount = document.querySelector(".amount-total");
const totalPerson = document.querySelector(".person-total");
const customTip = document.querySelector("#custom-tip");
const errorMsg = document.querySelector(".error-msg");

billInput.addEventListener("input", calculateTip);
peopleInputValue.addEventListener("input", calculateTip);
customTip.addEventListener("input", calculateTip);

tipOptions.forEach((option) => {
  option.addEventListener("click", () => {
    tipOptions.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
    calculateTip();
  });
});

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tip = parseFloat(customTip.value) / 100; //converts it into percentage by dividing it by 100
  const people = parseFloat(peopleInputValue.value);
  const tipAmount = (bill * tip) / people;
  const total = (bill + tipAmount) / people;

  tipOptions.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.innerText === "5%") {
        customTip.value = "5";
      } else if (option.innerText === "10%") {
        customTip.value = "10";
      } else if (option.innerText === "15%") {
        customTip.value = "15";
      } else if (option.innerText === "25%") {
        customTip.value = "25";
      } else if (option.innerText === "50%") {
        customTip.value = "50";
      } else {
        customTip.value = "";
      }
      errorMsg.style.display = "block";
      peopleInput.style.border = "3px solid var(--error)";
    });
  });

  totalAmount.innerText = "$" + tipAmount.toFixed(2);
  totalPerson.innerText = "$" + total.toFixed(2);

  if (bill === 0 || people === 0 || isNaN(bill) || isNaN(people)) {
    totalAmount.innerText = "$0.00";
    totalPerson.innerText = "$0.00";
  }
}

resetBtn.addEventListener("click", () => {
  errorMsg.style.display = "none";
  billInput.value = "";
  peopleInputValue.value = "";
  peopleInput.style.border = "none";
  customTip.value = "";
  totalAmount.innerText = "$0.00";
  totalPerson.innerText = "$0.00";
  tipOptions.forEach((option) => {
    option.classList.remove("active");
  });
});
