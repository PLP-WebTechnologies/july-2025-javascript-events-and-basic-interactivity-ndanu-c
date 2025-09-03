let divSection = document.getElementById("eventDiv")
let clickBtn = document.getElementById("click-meBtn")
let text = document.getElementById("div-text")

//Making use of event handling in JavaScript
clickBtn.addEventListener('click', function(){
    if(divSection.style.backgroundColor == "white" && text.style.backgroundColor ==  "white"){
        divSection.style.backgroundColor = "blue";
        text.style.backgroundColor = "green";
    }
    else{
        divSection.style.backgroundColor = "white";
        text.style.backgroundColor =  "white";
    }
})

//A toggle button for an Interactive Element that switches the body's color between colors white and black
let toggleBtn = document.getElementById("toggleBtn");
let main = document.getElementById("main");
toggleBtn.addEventListener('click', function(){
    if(toggleBtn.innerText == "Dark Mode"){
        toggleBtn.innerText = "Light Mode";
        main.style.backgroundColor = "black";
        main.style.color = "white";
    }
    else{
        toggleBtn.innerText = "Dark Mode";
        main.style.backgroundColor = "white";
        main.style.color = "black"
    }
})


//Form validation
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from submitting
  
    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
  
    // Error containers
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let formMessage = document.getElementById("formMessage");
  
    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    formMessage.textContent = "";
  
    let isValid = true;
  
    // Name validation
    if (name === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }
  
    // Email validation (basic regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      emailError.textContent = "Enter a valid email.";
      isValid = false;
    }
  
    // Password validation (min 6 chars)
    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isValid = false;
    }
  
    // Success
    if (isValid) {
      formMessage.textContent = "Form submitted successfully! ✅";
      formMessage.className = "success";
    }
  });
  