const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission'
  console.log("!");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Validation
  var isValid = true;
  if (!validateName(name)) {
    displayError("nameError", "Name must be a string");
    isValid = false;
  } else {
    clearError("nameError");
  }

  if (!validateEmail(email)) {
    displayError("emailError", "Invalid email address");
    isValid = false;
  } else {
    clearError("emailError");
  }

  if (!validateAge(age)) {
    displayError("ageError", "Age must be a positive integer greater than 18");
    isValid = false;
  } else {
    clearError("ageError");
  }

  if (!validatePassword(password)) {
    displayError(
      "passwordError",
      "Password must be between 4 and 12 characters long and contain English letters, numbers, and special characters."
    );
    isValid = false;
  } else {
    clearError("passwordError");
  }

  if (password !== confirmPassword) {
    displayError("confirmPasswordError", "Passwords do not match");
    isValid = false;
  } else {
    clearError("confirmPasswordError");
  }

  if (isValid) {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Password:", password);
  }
});

function validateName(name) {
  return typeof name === "string";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateAge(age) {
  return Number.isInteger(parseInt(age)) && age > 18;
}

function validatePassword(password) {
  // Password must be between 4 and 12 characters long and contain English letters, numbers, and special characters.
  return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/.test(
    password
  );
}

function displayError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}

document
  .getElementById("registrationForm")
  .addEventListener("input", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var isValid =
      validateName(name) &&
      validateEmail(email) &&
      validateAge(age) &&
      validatePassword(password) &&
      password === confirmPassword;

    document.getElementById("signupButton").disabled = !isValid;
  });
