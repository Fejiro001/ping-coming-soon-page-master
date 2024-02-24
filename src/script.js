/*
  * In this code, email verification and error messages
  * are displayed depending on if a value is missing or
  * if there is a mismatch in the pattern provided in our html
  * when the button is clicked.

  * Also a modal will pop up when the email has been verified.
  * This modal can be closed t=when the close (x) button is clicked.
*/

const pingButton = document.getElementById("pingButton");
const emailInput = document.getElementById("emailInput");
const errorMessage = document.getElementById("errorMessage");

pingButton.addEventListener("click", (e) => {
  e.preventDefault();

  verifyEmail();
});

function verifyEmail() {
  if (emailInput.validity.valueMissing) {
    errorMessage.innerHTML =
      "Whoops! It looks like you forgot to add your email";
  } else if (emailInput.validity.patternMismatch) {
    errorMessage.innerHTML = "Please provide a valid email address";
  } else {
    errorMessage.innerHTML = "";
    showSuccessMessage();
  }
}

