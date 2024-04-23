document.getElementById('ip').addEventListener('keypress', function(e){
  var task = this.value;
  if (e.key === 'Enter') {
    e.preventDefault(); 
    addTask();
  }
})


function addTask(){
var input = document.getElementById("ip");
var newTask = input.value.trim(); 

if (newTask !== "") { 
  var listItem = document.createElement("li");
  listItem.textContent = newTask;

  var completeButton=document.createElement("button");
  completeButton.textContent="완료";
  completeButton.className="complete";

  var hr=document.createElement("hr");
  var hr2=document.createElement("hr");
  completeButton.addEventListener('click',function(){
    var completeTask = document.getElementById("completeTask");
    completeTask.appendChild(listItem);
    completeTask.appendChild(hr2);
    completeButton.style.display="none";
    hr.remove();

    listItem.appendChild(deleteButton);
  });

    var deleteButton=document.createElement("button");
    deleteButton.textContent="삭제";
    deleteButton.className="delete";
  
    deleteButton.addEventListener('click',function(){
      listItem.remove();
      hr2.remove();
    });

  listItem.appendChild(completeButton);
  document.getElementById("list").appendChild(listItem);
  document.getElementById("list").appendChild(hr);
  input.value = ""; 
}
}
