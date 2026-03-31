function add() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (a + b);
}

function subtract() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (a - b);
}

function multiply() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (a * b);
}

function divide() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (a / b);
}

function calculateDiscount() {
  let price = Number(document.getElementById("price").value);
  let discount = Number(document.getElementById("discount").value);

  let final = price - (price * discount / 100);

  document.getElementById("finalPrice").innerText = "Final Price: ₹" + final;
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
    }
/* update */
