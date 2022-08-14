const toDoForm = document.querySelector("#sendToDo");
const todoList = document.querySelector("#todoList");
const inputToDo = document.querySelector("#inputToDo");
let toDoLists = [];


function removeList(event){
  const removeList = event.target.parentElement
  removeList.remove();
  toDoLists = toDoLists.filter((item) => item.id !== parseInt(removeList.id));
  saveList();
}

function saveList(){
  localStorage.setItem("toDoLists", JSON.stringify(toDoLists))
}
function makeList(newList){
  const li = document.createElement("li");
  li.id = newList.id
  const span = document.createElement("span");
  span.innerText = newList.text+"\t";
  const btn = document.createElement("button");
  btn.innerText = "delete";
  btn.addEventListener("click", removeList);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.append(li);
}


function submitHandler(event){
  event.preventDefault();
  const listVal = inputToDo.value;
  inputToDo.value = "";
  const listValObj = {
    text: listVal,
    id: Date.now(),
}
  toDoLists.push(listValObj);
  makeList(listValObj)
  saveList();
}


toDoForm.addEventListener("submit", submitHandler)

const getLists = localStorage.getItem("toDoLists");

if(getLists !== null){
  const parsedLists = JSON.parse(getLists);
  toDoLists = parsedLists
  parsedLists.forEach(makeList)
}