const modal = document.querySelector(".modal-wrapper");
const open = document.getElementById("open");
const close = document.getElementById("close");
open.onclick = () => {
    modal.style.display = "flex";
};
close.onclick = () => {
    modal.style.display = "none";
};