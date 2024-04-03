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
  if (!validateEmail(email)) {
    displayError("emailError", "Invalid email address");
    isValid = false;
  } else {
    clearError("emailError");
  }

  if (!validateAge_integer(age)) {
    displayError("ageError", "Age must be a positive integer greater than 18");
    isValid = false;
  } else {
    clearError("ageError");
  }

  if (!validateAge_parseInt(age)) {
    displayError("ageError", "Age must be a positive integer greater than 18");
    isValid = false;
  } else {
    clearError("ageError");
  }

  if (!validateAge_min(age)) {
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

  if (!validatePassword_min(password)) {
    displayError(
      "passwordError",
      "Password must be between 4 and 12 characters long and contain English letters, numbers, and special characters."
    );
    isValid = false;
  } else {
    clearError("passwordError");
  }

  if (!validatePassword_max(password)) {
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

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateAge_integer = (age) => {
  return Number.isInteger();
};

const validateAge_parseInt = (age) => {
  return age > 0;
};

const validateAge_min = (age) => {
  return age > 18;
};

const validatePassword = (password) => {
  return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/.test(
    password
  );
};

const validatePassword_min = (password) => {
  return password.length > 4;
};

const validatePassword_max = (password) => {
  return password.length < 12;
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
