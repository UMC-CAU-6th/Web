const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission'
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validation
  let isValid = true;
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

const validateName = (name) => {
  return typeof name === "string";
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateAge = (age) => {
  return Number.isInteger(parseInt(age)) && age > 18;
};

const validatePassword = (password) => {
  // Password must be between 4 and 12 characters long and contain English letters, numbers, and special characters.
  return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/.test(
    password
  );
};

const displayError = (id, message) => {
  document.getElementById(id).textContent = message;
};

const clearError = (id) => {
  document.getElementById(id).textContent = "";
};

form.addEventListener("input", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const isValid =
    name !== "" &&
    email !== "" &&
    age !== "" &&
    password !== "" &&
    confirmPassword !== "";

  document.getElementById("signupButton").disabled = !isValid;
});
