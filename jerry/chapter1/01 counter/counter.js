const count_num = document.getElementById("number");
const btn_increase_num = document.getElementById("increase");
const btn_decrease_num = document.getElementById("decrease");

console.log(count_num);
console.log(btn_increase_num);
console.log(btn_decrease_num);

btn_increase_num.addEventListener("click", function() {
    console.log("increase clicked!");
    count_num.innerText++;
});

btn_decrease_num.addEventListener("click", function() {
    console.log("decrease clicked!");
    count_num.innerText--;
});