var form = document.getElementById("form");
var success = document.querySelector(".completed-state");
var confirmBtn = document.querySelector(".confirmBtn");
var continueBtn = document.querySelector(".continueBtn")
var inputs = document.querySelectorAll("input");
var isFilled = true;

//check if all input types are filled
function checkInputs() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      isFilled = false;
    }
  }
}

function showSuccess() {
  if (isFilled == true) {
    form.style.display = "none";
    success.style.display = "block";
  }
}
confirmBtn.addEventListener("click", showSuccess);