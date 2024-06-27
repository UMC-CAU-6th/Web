const btn = document.getElementById("join");
btn.onclick = () => {
    //이름
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const nameSuccess = document.getElementById("nameSuccess");
    if(nameInput.value === ""){
        nameError.style.display="block";
        nameSuccess.style.display="none";
    }
    else {
        nameSuccess.style.display = "block";
        nameError.style.display="none";
    }

    //나이
    const ageInput = document.getElementById("age");
    const ageError = document.getElementById("ageError");
    const ageSuccess = document.getElementById("ageSuccess")
    if(ageInput.value === ""){
        ageError.style.display="block";
        ageSuccess.style.display="none";
    }
    else {
        ageSuccess.style.display = "block";
        ageError.style.display="none";
    }
    //이메일
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailSuccess = document.getElementById("emailSuccess");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(emailInput.value)){
        emailError.style.display = "block";
        emailSuccess.style.display = "none";
    }
    else{
        emailSuccess.style.display = "block";
        emailError.style.display = "none";
    }

    //비밀번호
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordSuccess = document.getElementById("passwordSuccess")
    if(passwordInput.value === ""){
        passwordError.style.display="block";
        passwordSuccess.style.display="none";
    }
    else {
        passwordSuccess.style.display = "block";
        passwordError.style.display="none";
    }
    //비밀번호 확인
    const passwordCheckInput = document.getElementById("passwordCheck");
    const passwordCheckError = document.getElementById("passwordCheckError");
    const passwordCheckSuccess = document.getElementById("passwordCheckSuccess")
    if(passwordCheckInput.value === "" || passwordCheckInput.value !== passwordInput.value){
        passwordCheckError.style.display="block";
        passwordCheckSuccess.style.display="none";
    }
    else {
        passwordCheckSuccess.style.display = "block";
        passwordCheckError.style.display="none";
    }

    if(nameSuccess.style.display === "block"&&ageSuccess.style.display === "block"&&emailSuccess.style.display === "block"&&passwordSuccess.style.display === "block"&&passwordCheckSuccess.style.display === "block"){
        const modal = document.querySelector(".modal-wrapper");
        const open = document.getElementById("join");
        const close = document.getElementById("close");
        modal.style.display = "flex";
        close.onclick = () => {
            modal.style.display = "none";
        };
    }
};
