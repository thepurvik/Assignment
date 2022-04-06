const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const submitbtn = document.getElementById("submit");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");



const clcy = () => {
     let email = document.getElementById('email').value;
     let name = document.getElementById('name').value;
     let desc = document.getElementById('desc').value;
     let phone = document.getElementById('phone').value;

     let invalidemail = "Email id  is invalid"
     let invalidphone = "phone number is invalid"

     let test1 = document.getElementById("email").validity.valid
     let test2 = document.getElementById("phone").validity.valid

     if (test1 || test2) {
          test1 = email
          test2 = phone
     }
     else {
          test1 = invalidemail
          test2 = invalidphone
     }

 

     let test = name + '\n' + test1 + '\n' + test2 + '\n' + desc;
     alert(test);
}
signInBtn.addEventListener("click", () => {
     container.classList.remove("right-panel-active");
});
signUpBtn.addEventListener("click", () => {
     container.classList.add("right-panel-active");
});
fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

