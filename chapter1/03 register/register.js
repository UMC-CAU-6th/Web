const input_name = document.getElementById("input_name");
const input_email = document.getElementById("input_email");
const input_age = document.getElementById("input_age");
const input_password = document.getElementById("input_password");
const input_password_check = document.getElementById("input_password_check");

const form = document.getElementById("register_form");

const infos = document.getElementsByClassName("info");
const warns = document.getElementsByClassName("warn");

for(let i=0; i<infos.length ; i++){
    infos[i].style.display = "none";
}
for(let i=0; i<warns.length ; i++){
    warns[i].style.display = "none";
}

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btn_close_modal = document.getElementById("btn_close_modal");


function toggle_modal() {
    modal.classList.toggle('show');
    if (modal.classList.contains('show')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

btn_close_modal.addEventListener("click", toggle_modal)

form.addEventListener("submit", register);

function register(event){
    let check = true;

    if (!(input_name.value === "")){
        warns[0].style.display = "none";
        infos[0].style.display = "block";
    } else {
        warns[0].style.display = "block";
        infos[0].style.display = "none";
        check = false;
    }

    if(/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.test(input_email.value)){
        warns[1].style.display = "none";
        infos[1].style.display = "block";
    } else {
        warns[1].style.display = "block";
        infos[1].style.display = "none";
        check = false;
    }

    if(/^[0-9][0-9]*$/i.test(input_age.value)){
        warns[2].style.display = "none";
        infos[2].style.display = "block";
    } else {
        warns[2].style.display = "block";
        infos[2].style.display = "none";
        check = false;
    }

    if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/.test(input_password.value)){
        warns[3].style.display = "none";
        infos[3].style.display = "block";
    } else {
        warns[3].style.display = "block";
        infos[3].style.display = "none";
        check = false;
    }

    if(input_password.value === input_password_check.value){
        warns[4].style.display = "none";
        infos[4].style.display = "block";
    } else {
        warns[4].style.display = "block";
        infos[4].style.display = "none";
        check = false;
    }

    if(check) {
        toggle_modal();
        console.log("register success");
    } else {
        console.log("register failed");
    }
}
