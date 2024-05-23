const input_form = document.getElementById("input_form");
const input_box = document.getElementById("input_box");

const todo_list = document.getElementById("todo_list");
const done_list = document.getElementById("done_list");

input_form.addEventListener("submit", create_new_task);

function create_new_task(event, task) {
    //<div class="task"><li>할 일 내용...</li><button>✔</button></div>
    if((input_box.value != "")||(event==null)){
        var new_task = document.createElement("div");
        new_task.classList.add("task");

        var new_li = document.createElement("li");
        (task) ? new_li.innerText= task : new_li.innerText = input_box.value;
        
        var new_btn = document.createElement("button");
        new_btn.classList.add("btn_task");
        new_btn.innerText = "✔";
        new_btn.addEventListener("click", done_task);

        new_task.appendChild(new_li);
        new_task.appendChild(new_btn);
        todo_list.appendChild(new_task);
    }
    input_box.value = "";
}

function done_task(event){
    var target_task = event.target.parentNode;

    var new_task = document.createElement("div");
    new_task.classList.add("task");

    var new_li = document.createElement("li");
    new_li.innerText = target_task.firstChild.innerText;
        
    var new_btn = document.createElement("button");
    new_btn.classList.add("btn_task");
    new_btn.innerText = "✖";
    new_btn.addEventListener("click", delete_task);

    new_task.appendChild(new_li);
    new_task.appendChild(new_btn);
    done_list.appendChild(new_task);

    target_task.remove();
}

function delete_task(event){
    event.target.parentNode.remove();
}


create_new_task(null, "운영체제 3장 필기정리");
create_new_task(null, "ACT 시나리오 작성");
create_new_task(null, "수치해석 퀴즈");
create_new_task(null, "UMC 실습과제");