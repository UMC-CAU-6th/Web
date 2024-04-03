const form = document.getElementById("registrationForm");
const modal = document.querySelector(".modal-wrapper");
const close = document.getElementById("close");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission'
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = +document.getElementById("age").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validation
  let isValid = true;
  if (!validateEmail(email)) {
    displayError("emailError", "이메일 형식이 안 맞아요.");
    isValid = false;
  } else {
    clearError("emailError");
  }

  if (!validateAge_integer(age)) {
    console.log(Number.isInteger(age));
    displayError("ageError", "나이가 정수가 아니면 어뜨케요.");
    isValid = false;
  } else if (!validateAge_parseInt(age)) {
    displayError("ageError", "나이가 음수라고요?");
    isValid = false;
  } else if (!validateAge_min(age)) {
    displayError("ageError", "너는 발 닦고 자라");
    isValid = false;
  } else {
    clearError("ageError");
  }

  if (!validatePassword(password)) {
    displayError("passwordError", "비밀번호가 너무 약해요.");
    isValid = false;
  } else if (!validatePassword_min(password)) {
    displayError("passwordError", "비밀번호가 너무 짧아요.");
    isValid = false;
  } else if (!validatePassword_max(password)) {
    displayError("passwordError", "비밀번호가 너무 길어요.");
    isValid = false;
  } else {
    clearError("passwordError");
  }

  if (password !== confirmPassword) {
    displayError("confirmPasswordError", "입력한 비밀번호랑 다르잖아요.");
    isValid = false;
  } else {
    clearError("confirmPasswordError");
  }

  if (isValid) {
    modal.style.display = "flex";
  }
});

close.onclick = () => {
  modal.style.display = "none";
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateAge_integer = (age) => {
  return Number.isInteger(age);
};

const validateAge_parseInt = (age) => {
  return age > 0;
};

const validateAge_min = (age) => {
  return age > 18;
};

const validatePassword = (password) => {
  return /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])$/.test(password);
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
