const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const submitbtn = document.getElementById("submit");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");


signInBtn.addEventListener("click", () => {
     container.classList.remove("right-panel-active");
});
signUpBtn.addEventListener("click", () => {
     container.classList.add("right-panel-active");
});
fistForm.addEventListener("submit", (e) =>{
     let email = document.getElementById('email').value;
     let name = document.getElementById('name').value;
     let desc = document.getElementById('desc').value;
     let phone = document.getElementById('phone').value;

     let test = name + '\n' + email + '\n' + phone + '\n' + desc;
     alert(test);

 e.preventDefault()
});
secondForm.addEventListener("submit", (e) => e.preventDefault());

