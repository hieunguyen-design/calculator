const body = document.querySelector("body");
const display = document.querySelector(".display");
let numberInput = [];
let number;
let button;
let result;
let firstNumber;
let secondNumber;
let operator;

function add(a, b) {
  return a * 1 + b * 1;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(first, operator, second) {
  switch (operator) {
    case "add":
      return add(first, second);
    case "subtract":
      return subtract(first, second);
    case "multiply":
      return multiply(first, second);
    case "divide":
      return divide(first, second);
    default:
      "Error";
  }
}

function getInput(button) {
  let ditgit = button.innerText;
  return ditgit;
}

function getNumberInput(button) {
  let number;
  let ditgit = getInput(button);
  numberInput.push(ditgit);
  number = numberInput.join("");
  display.textContent = number;
  // console.log(number);
  return number;
}

function getOperator(button) {
  button.classList.add("current-operation"); //change color if current operation
  return button.id;
}

//Reset Display, Reset number,
function resetDisplay(value) {
  numberInput = [];
  number = "";
  display.textContent = value;
}
//Clear all
function allClear() {
  firstNumber = null;
  secondNumber = null;
  result = null;
  operator = null;
  numberInput = [];
  number = "";
  display.textContent = number;
}

function inputHandler(button) {
  const input = button.innerText;
  let ditgitInput = false;
  let operatorInput = false;
  let clearInput = false;
  let signInput = false;
  let percentageInput = false;
  let equalsInput = false;
  //input handler
  if ((input >= 0 && input <= 9) || input === ".") {
    ditgitInput = true;
    number = getNumberInput(button);
    // console.log("here is the number you entered: " + number);
  } else {
    switch (input) {
      case "C":
        allClear("");
        console.log(input);
        clearInput = true;
        break;
      case "+/-":
        console.log(input);
        number = 0 - number;
        display.textContent = number;
        signInput = true;
        break;
      case "%":
        console.log(input);
        console.log(number);
        console.log(result);
        if (number != result) {
          number = result;
        }
        result = number / 100;
        display.textContent = result;
        percentageInput = true;
        break;
      case "=":
        console.log(input);
        if (!secondNumber) {
          secondNumber = number;
          console.log("secondNumber: " + secondNumber);
        }
        console.log(firstNumber, operator, secondNumber);
        result = operate(firstNumber, operator, secondNumber);
        console.log(result);
        display.textContent = result;
        firstNumber = result;
        secondNumber = null;

        equalsInput = true;
        break;
      default: //operator
        if (!firstNumber) {
          firstNumber = number;
          console.log("firstNumber " + firstNumber);
        } else if (!secondNumber) {
          secondNumber = number;
          console.log("secondNumber " + secondNumber);
          // console.log("secondNumber: " + secondNumber);
        }
        if (!operator) {
          operator = getOperator(button);
          resetDisplay(firstNumber);
          console.log("operator: " + operator);
        } else {
          console.log(firstNumber, operator, secondNumber);
          result = operate(firstNumber, operator, secondNumber);
          resetDisplay(result);
          firstNumber = result;
          secondNumber = null;
          operator = getOperator(button);
          console.log(firstNumber, operator, secondNumber);
          // numberInput = [];
          // number = "";
          operatorInput = true;
        }
    }
  }
}
