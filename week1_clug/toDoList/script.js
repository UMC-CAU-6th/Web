const input = document.querySelector("input")
const toDoList = document.getElementById("list")
const completedList = document.getElementById("complete")

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        addList();
    }
})
addList = () => {
    const inputValue = input.value.trim();
    if (inputValue !== ''){
        const newList = document.createElement('li');
        newList.textContent = inputValue;
        const completeBtn = document.createElement('button');
        input.value='';
        completeBtn.textContent = '완료';
        completeBtn.onclick = (event) => {
            const list = event.target.parentNode;
            toDoList.removeChild(list);
            completedList.appendChild(list);
            completeBtn.textContent = '삭제'
            completeBtn.onclick = () => {
                list.parentNode.removeChild(list);
            }
        };
        newList.appendChild(completeBtn);
        toDoList.appendChild(newList);
        inputField.value = '';
    }
}