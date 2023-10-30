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


//ADD EVENT LISTENER TO EMAIL INPUT
    const emailInput = document.getElementById("email");
    emailInput.addEventListener("input", function() {
        const emailValue = emailInput.value;
    //CREATE EVENT HANDLER FUNCTIONS
    if  (isValidEmail(emailValue)) {
        emailInput.style.border = "2px solid blue";
        
    } else {
        emailInput.style.border = "1px solid red";
    }
    
        console.log(emailValue);
    })








function validate(evt) {
    constnameVal = validateName();
    if (nameVal === false) {
        evt.returnValue = false;
        return false
    }
}


