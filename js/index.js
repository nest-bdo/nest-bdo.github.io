const buttons = document.querySelectorAll("div.counter");
const buttonTexts = document.querySelectorAll("div.counter>div");
const resetBtn = document.querySelector("#reset");

var countArr = new Array(buttons.length);

buttons.forEach((button, i) => {
  countArr[i] = 0;
  
  button.addEventListener("click", (event) => {
    buttonTexts[i].textContent = ++countArr[i];
  });
});

resetBtn.addEventListener("click", (event) => {
  buttons.forEach((button, i) => {
    countArr[i] = 0;
    buttonTexts[i].textContent = countArr[i];
  });
});
