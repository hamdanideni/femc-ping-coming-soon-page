"use strict";

const form = document.querySelector("#form");
const emailInput = document.querySelector(".email");

const isValidEmail = (input) => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(String(input).toLowerCase());
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector(".error-message");

  displayError.textContent = message;
  inputControl.classList.add("error");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;

  inputControl.classList.remove("error");
  element.value = "";
};

const validateInputs = () => {
  const inputValue = emailInput.value.trim();

  if (inputValue === "") {
    setError(emailInput, "Whoops! It looks like you forgot to add your email");
  } else if (!isValidEmail(inputValue)) {
    setError(emailInput, "Please provide a valid email addres");
  } else {
    setSuccess(emailInput);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});
