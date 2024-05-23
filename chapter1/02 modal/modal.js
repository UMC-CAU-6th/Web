const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btn_open_modal = document.getElementById("btn_open_modal");
const btn_close_modal = document.getElementById("btn_close_modal");


function toggle_modal() {
    modal.classList.toggle('show');
    if (modal.classList.contains('show')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

btn_open_modal.addEventListener("click", toggle_modal)

btn_close_modal.addEventListener("click", toggle_modal)
