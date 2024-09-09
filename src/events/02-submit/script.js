// target the form
const loginForm = document.getElementById("login-form");

const createAlertAndRender = (message) => {
  // check if alert exists
  const alertElement = document.querySelector(".alert");

  if (alertElement) {
    alertElement.remove();
  }

  // create section
  const sectionElement = document.createElement("section");

  // add class attr
  sectionElement.setAttribute("class", "alert");

  // add text content
  sectionElement.textContent = message;

  // append section to main

  const mainElement = document.querySelector("main");

  mainElement.append(sectionElement);
};

// define the submit handler function
const handleSubmit = (event) => {
  // prevent the default form submit
  event.preventDefault();

  // get email address value
  const emailInput = document.getElementById("email-input");

  // get the value
  const email = emailInput.value;

  // get password value
  const passwordInput = document.getElementById("password-input");

  // get the value
  const password = passwordInput.value;

  if (!email || !password) {
    // create alert and render
    createAlertAndRender("Please enter a valid email address and password");
  } else if (email !== "bob.smith@email.com" && password !== "Password123!") {
    // create alert and render
    createAlertAndRender("Invalid credentials");
  } else {
    // create alert and render
    createAlertAndRender("Hurray!");
  }
};

// add event listener for submit on form
loginForm.addEventListener("submit", handleSubmit);
