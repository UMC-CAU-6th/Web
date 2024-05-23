const url = 'https://api.chucknorris.io/jokes/random';
const joke_box = document.getElementById('joke_box');
const btn = document.getElementById('get_joke');
const time = document.getElementById('time');

var spent = 0;

function get_joke() {
    joke_box.innerText = "wait for response...";
    btn.disabled = true;
    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => update_all(data));
}

function update_all(data) {
    console.log(data);
    joke_box.innerText = data.value;
    btn.disabled = false;
}

btn.addEventListener('click', get_joke);

function time_go() {
    setTimeout(()=>{
        spent += 0.1;
        time.innerText = spent.toFixed(1);
        time_go();
    },100)
}

time_go();