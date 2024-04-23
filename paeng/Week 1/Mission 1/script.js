const open = document.getElementById("join");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

let nameValid = false;
let emailValid = false;
let ageValid = false;
let pwdValid = false;
let pwdCheckValid = false;

open.onclick = () => {
  if (nameValid && emailValid && ageValid && pwdValid && pwdCheckValid) {
    modal.style.display = "flex";
  }
};

close.onclick = () => {
  modal.style.display = "none";
};

document.getElementById('emlIp').addEventListener('input', function() {
  var emailInput = this.value;
  var emailOkMessage = document.getElementById('emailOk');
  var emailErrorMessage = document.getElementById('emailError')
  var emailDefaultMessage = document.getElementById('emailDefault')
  
  if (emailInput.includes('@')) {
    emailOkMessage.style.display = 'block'; // 메시지를 보이게 함
    emailErrorMessage.style.display = 'none';
    emailValid=true;
  } else {
    emailErrorMessage.style.display = 'block'; // 메시지를 숨김
    emailOkMessage.style.display = 'none';
    emailValid=false;
  }
});


document.getElementById('nameIp').addEventListener('input', function() {
  var nameInput = this.value;
  var nameOkMessage = document.getElementById('nameOk');
  var nameErrorMessage = document.getElementById('nameError')
  
  if (nameInput.length!=0) {
    nameOkMessage.style.display = 'block'; // 메시지를 보이게 함
    nameErrorMessage.style.display = 'none';
    nameValid=true;
  } else {
    nameErrorMessage.style.display = 'block'; // 메시지를 숨김
    nameOkMessage.style.display = 'none';
    nameValid=false;
  }

});


document.getElementById('ageIp').addEventListener('input', function() {
  var ageInput = this.value;
  var ageOkMessage = document.getElementById('ageOk');
  var ageErrorMessage = document.getElementById('ageError')

  let age=parseFloat(ageInput);
  
  // 간단한 이메일 형식 검사
  if (age>=20&&Number.isInteger(age)) {
    ageOkMessage.style.display = 'block'; // 메시지를 보이게 함
    ageErrorMessage.style.display = 'none';
    ageValid=true;

  } else {
    ageErrorMessage.style.display = 'block'; // 메시지를 숨김
    ageOkMessage.style.display = 'none';
    ageValid=false;
  }

});

document.getElementById('pwdIp').addEventListener('input', function() {
  var pwdInput = this.value;
  var pwdOkMessage = document.getElementById('pwdOk');
  var pwdErrorMessage = document.getElementById('pwdError');

  var hasLetter = /[a-zA-Z]/.test(pwdInput); 
  var hasNumber = /\d/.test(pwdInput); 
  var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwdInput); 

  if(hasLetter && hasNumber && hasSpecialChar) {
    pwdOkMessage.style.display = 'block'; 
    pwdErrorMessage.style.display = 'none';
    pwdValid=true;
  } else {
    pwdErrorMessage.style.display = 'block'; 
    pwdOkMessage.style.display='none';
    pwdValid=false;
  }

});

document.getElementById('pwdIp').addEventListener('input', checkPasswordMatch);
document.getElementById('pwdcheckIp').addEventListener('input', checkPasswordMatch);

function checkPasswordMatch() {
  var pwdInput = document.getElementById('pwdIp').value;
  var pwdcheckInput = document.getElementById('pwdcheckIp').value;
  var pwdOkMessage = document.getElementById('pwdcheckOk');
  var pwdErrorMessage = document.getElementById('pwdcheckError');

  if(pwdcheckInput === pwdInput) {
    pwdOkMessage.style.display = 'block'; 
    pwdErrorMessage.style.display = 'none';
    pwdCheckValid=true;
  } else {
    pwdOkMessage.style.display = 'none';
    pwdErrorMessage.style.display = 'block'; 
    pwdCheckValid=false;
  }

}


 /* const open = document.getElementById("join");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};*/

