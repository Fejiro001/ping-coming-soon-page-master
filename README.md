# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![Screenshot ](./assets/images/ping-screenshot.png)

### Links

- Solution URL: [Solution URL]()
- Live Site URL: [Live Site URL](https://fejiro001.github.io/ping-coming-soon-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - CSS library

### What I learned

This piece of code is used to verify the email an show different messages depending on the state of the input element

```js
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
```

### Continued development

This is the first time I am using Tailwind CSS in a project and it was really fun to pick up a new library. I plan to continue using it in some more projects, especially using it together with the React framework.

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/) - This helped me get started with Tailwind CSS.
- [Tailwind CSS Crash Course](https://youtu.be/UBOj6rqRUME?si=_yKt8gZE_4_QVJ2r) - This helped me get started with Tailwind CSS.

## Author

- Frontend Mentor - [@Fejiro001](https://www.frontendmentor.io/profile/Fejiro001)
- Twitter - [@aberefejiro](https://www.twitter.com/aberefejiro)
