//CACHE THE FORM ELEMENT
const form = document.getElementById("form");

//Access form element
const formHeader = document.getElementById("form-header");
formHeader.textContent = "Students Register Here";
console.log(formHeader);

//add an event listener for the form submission
form.addEventListener("submit", function(event) {
    //prevent the form from submitting automaticlly
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (firstName.trim() === "") {
        alert("First Name is required")
        return
    }

    if (LastName.trim() === "") {
        alert("First Name is required")
        return
    }

    if (!email.match(emailRegex)) {
        alert("Invalid email address");
        return
    }

//USE TWO BOM PROPERTIES OR METHODS   
//SUBMIT FORM AND OPEN NEW WINDOW IF ALL VALIDATION MATCHED  
const newWindow = window.open("https://www.blekstech.com/submission", "NewWindow");
window.alert("Your Form is been Submitted Successfully!");

});



//ADD EVENT LISTENER TO EMAIL INPUT
    const emailInput = document.getElementById("email");
    emailInput.addEventListener("input", function() {
        const emailValue = emailInput.value;
    //CREATE EVENT HANDLER FUNCTIONS
    if  (isValidEmail(emailValue)) {
        emailInput.style.border = "2px solid blue";
        
    } else {
        emailInput.style.border = "1px solid red";
    //ERROR MESSAGE IF EMAIL INPUT IS INVALID  
    emailError.style.display = "block";  
    }
    
        console.log(emailValue);
    })

//CREATE NEW ELEMENT
const cancelButton = document.getElementById("cancelButton");
const container = document.getElementById("container");
//ADD EVENT LISTENER
cancelButton.addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.textContent = "Thank you for your submission";
    container.appendChild(newDiv);
});

//USE STYLE TO CHANGE BACKGROUND COLOR WHEN GENDER IS CLICKED
const registrationForm = document.querySelector(".registration")

registrationForm.addEventListener("focusin", function (event) {
    if (event.target.tagName === "INPUT") {
      event.target.style.backgroundColor = "white";
      isInputFocused = true;
    }
  });
  
  registrationForm.addEventListener("focusout", function (event) {
    if (event.target.tagName === "INPUT") {
      event.target.style.backgroundColor = "";
      isInputFocused = false;
    }
  });
  
  registrationForm.addEventListener("keydown", function (event) {
    if (isInputFocused && event.target.tagName === "INPUT" && event.key === " ") {
      event.target.style.backgroundColor = "white";
    }
    
  });






 









