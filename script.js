let nameInput = document.getElementById("nameInput");
let showBtn = document.getElementById("showBtn");
let output = document.getElementById("output");
let userName = document.getElementById("name");
showBtn.addEventListener ("click", function() {
  let name = nameInput.value;
  if (name === "") {
    output.innerText = "please input your name";
    return;
  }
  output.innerText = "welcome " + name;
});
let form = document.getElementById("form");
let name = document.getElementById ("name");
let email = document.getElementById ("email");
let age = document.getElementById ("age");
form.addEventListener ("submit", function(event) {
  event.preventDefault();
  let name = userName.value;
  let userEmail = email.value;
  let userAge = parseInt (age.value);
   let selectedGender = document.querySelector('input[name="Gender"]:checked');
   console.log(name, userEmail, userAge, selectedGender);
    if (name === "" || userEmail === "" || isNaN(userAge) || !selectedGender) {
        alert("Please fill all fields correctly");
        return;
    }
    alert("Application submitted successfully!");
    form.reset();
});