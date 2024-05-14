const resetBtn = document.querySelector(".reset-btn");
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector(".people-input");
const peopleInputValue = document.querySelector("#number-of-people");
const tipAmount = document.querySelectorAll(".option");
const totalAmount = document.querySelector(".amount-total");
const totalPerson = document.querySelector(".person-total");
const customTip = document.querySelector("#custom-tip");
const errorMsg = document.querySelector(".error-msg");


tipAmount.forEach((tip) => {
    tip.addEventListener("click", () => {
        if (tip === customTip) {
            billInput.value % customTip[2].value === 0;
        }
})

resetBtn.addEventListener("click", () => {
  errorMsg.style.display = "none";
  billInput.value = "";
  peopleInput.value = "";
  customTip.value = "";
  totalAmount.innerText = "$0.00";
  totalPerson.innerText = "$0.00";
});
