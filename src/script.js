/*
 * In this code, email verification and error messages
 * are displayed depending on if a value is missing,
 * if there is a mismatch in the pattern provided in our html
 * and if the email is correct
 * when the button is clicked.
 */

const pingButton = document.getElementById("pingButton");
const emailInput = document.getElementById("emailInput");
const errorMessage = document.getElementById("errorMessage");

pingButton.addEventListener("click", (e) => {
  e.preventDefault();

  verifyEmail();
});

function verifyEmail() {
  errorMessage.style.color = "red";

  if (emailInput.validity.valueMissing) {
    errorMessage.innerHTML =
      "Whoops! It looks like you forgot to add your email";
  } else if (emailInput.validity.patternMismatch) {
    errorMessage.innerHTML = "Please provide a valid email address";
  } else {
    errorMessage.innerHTML = "Successfully subscribed!";
    errorMessage.style.color = "green";
  }
}
