const name = document.getElementById("input-name");
const email = document.getElementById("input-email");
const age = document.getElementById("input-age");
const pw = document.getElementById("input-pw");
const pwCheck = document.getElementById("input-pw-check");

const nameMs = document.getElementById("name-message");
const emailMs = document.getElementById("email-message");
const ageMs = document.getElementById("age-message");
const pwMs = document.getElementById("pw-message");
const pwCheckMs = document.getElementById("pw-check-message");

const btn = document.getElementById('join-button');
let ck1 =  false;
let ck2 = false;
let ck3 = false;
let ck4 = false;
let ck5 = false;

const ck = () =>{
  if(ck1 && ck2 && ck3 && ck4 && ck5){
    btn.disabled = false;
  }
}

const changeName = () =>{
  if (name.value !== "") {
    nameMs.innerText = "멋진 이름이군요!";
    nameMs.style.color = "green";
    ck1 = true;
    ck();
  }
  else{
    nameMs.innerText = "이름을 입력하시오";
    nameMs.style.color = "red";
    
  }
}
const changeEmail = () =>{
  if (email.value.includes("@")){
    emailMs.innerText = "올바른 이메일 형식입니다"
    emailMs.style.color = "green";
    ck2 = true;
    ck();
  }
  else{
    emailMs.innerText = "올바른 이메일을 입력하시오"
    emailMs.style.color = "red";
    
  }
}
const changeAge = () =>{
  const numAge = Number(age.value);
  if (isNaN(age.value)){
    ageMs.innerText = "숫자로 입력하세요";
    ageMs.style.color = 'red';
  }
  else{
    if (Number(numAge < 0 || !Number.isInteger(numAge))){
      ageMs.innerText = "올바른 나이를 입력하세요";
      ageMs.style.color = 'red';
    }
    else if(numAge < 19){
      ageMs.innerText = "19세 미만은 가입할 수 없습니다";
      ageMs.style.color = 'red';    
    }
    else{
      ageMs.innerText = "올바른 나이 형식입니다"
      ageMs.style.color = 'green';
      ck3 = true;
      ck();
    }
  }
}
const changePw = () =>{
  var pattern1 = /[0-9]/;				
	var pattern2 = /[a-zA-Z]/;			
	var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;	

  if(pw.value.length < 5 || pw.value.length > 12){
    pwMs.innerText = "비밀번호는 5~12자리로 입력하시오";
		pwMs.style.color = "red";
  }

  else if(!pattern1.test(pw.value) || !pattern2.test(pw.value) || !pattern3.test(pw.value)) {
		pwMs.innerText = "문자, 숫자, 특수문자로 구성하여야 합니다";
		pwMs.style.color = "red";
	} 

  else{
  	pwMs.innerText = "올바른 비밀번호 형식입니다";
		pwMs.style.color = "green"; 
    ck4 = true;
    ck();
  }
}
const changePwCheck = () =>{
  if (pw.value == pwCheck.value){
    pwCheckMs.innerText = "비밀번호가 일치합니다";
		pwCheckMs.style.color = "green";	  
    ck5 = true;  
    ck();
  }
  else{
    pwCheckMs.innerText = "비밀번호가 일치하지 않습니다";
		pwCheckMs.style.color = "red";	    
  }
}
