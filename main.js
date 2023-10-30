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
})

// //CHANGE BACKGROUND COLOR USING QUERY SELECTOR
// const formBody = document.querySelector("body");
// formBody.style.backgroundColor = "var(--body-background)";


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
      event.target.style.backgroundColor = "lightblue";
    }
  });



 









