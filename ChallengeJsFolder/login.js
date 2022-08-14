const login = document.querySelector("#login");
const loginDiv = document.querySelector("#showLogin")
const loginForm = document.querySelector("#loginForm")

function loginHandler(event){
  event.preventDefault();
  loginForm.classList.add("hidden");
  const loginName = login.value
  localStorage.setItem("userName",loginName);
  loginDiv.innerText = `Nice to meet ${loginName}!!`
}

function showUserName(){
  
}
const storageName = localStorage.getItem("userName")

if(storageName === null){
  loginForm.addEventListener("submit", loginHandler);
} else {
  loginForm.classList.add("hidden");
  loginDiv.innerText = `Nice to meet ${storageName}!!`
}