let pingForm = document.getElementById('pingForm');
// let pingButton = document.getElementById('pingButton');
let emailInput = document.getElementById('emailInput');
let errorMessage = document.getElementById('errorMessage');

pingForm.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.element = 'BUTTON') {
        console.log('click');
        if (!emailInput.checkValidity()) {
            errorMessage.innerHTML = "Please provide a valid email address";
        } else {
            errorMessage.innerHTML = "Whoops! It looks like you forgot to add your email";
        }
    }
})