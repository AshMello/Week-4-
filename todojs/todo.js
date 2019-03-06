let btnAdd = document.getElementById("btnAdd")
let textField = document.getElementById("textField")
let pendList = document.getElementById("pendList")
let btnDel = document.getElementsByClassName("btnDel")
let completeTasks = document.getElementsByClassName("completeTasks")


btnAdd.addEventListener('click',function() {
    let taskName = textField.value
    let task = document.createElement("li")
    task.className = "task"

    span = document.createElement("span")
    span.innerHTML = taskName

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Remove"
    deleteButton.className = "btnDel"
    deleteButton.onclick = function removeTask() {
        event.currentTarget.parentElement.remove();
      }

    let cheBox = document.createElement("input")
    cheBox.type = "checkbox"

    task.appendChild(cheBox)
    task.appendChild(span)
    task.appendChild(deleteButton)
    pendList.appendChild(task) 

    })