document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form= document.querySelector('#create-task-form')
  form.addEventListener('submit', (e)=> {
    e.preventDefault()
    displayTodo(form.querySelector("#new-task-description").value)
    form.reset()
  })

});

function displayTodo(todo){
  let list= document.createElement('li')
  list.textContent= `${todo} `
  let btn= document.createElement('button')
  btn.textContent= 'x'
  btn.addEventListener('click', deleteTask)
  list.appendChild(btn)
  let tasks= document.querySelector('#tasks')
  tasks.appendChild(list)
}

function deleteTask(e){
  e.target.parentNode.remove()
}