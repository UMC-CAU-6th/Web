const open = document.getElementById("modalOpen");
const close = document.getElementById("modalClose");
const modalWrapper = document.getElementById("modal-wrapper");

open.onclick = () => {
  modalWrapper.style.display = "flex";
};

close.onclick = () => {
  modalWrapper.style.display = "none";
};
