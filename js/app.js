let signUpForm = document.querySelector(".signUp");
let inputs = signUpForm.querySelectorAll("input");
let errorImages = signUpForm.querySelectorAll("img");
let validationText = signUpForm.querySelectorAll(".validation");
let validInvalidArray = []; // Valid: true ; Invalid: false

let submitButton = document.querySelector("#submit");

let emailInput = document.querySelector("#email");
let paramEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

/* 
This event validates when the input is not empty the error icon and the message will not display (except the email input that requires
extra validation)
*/
signUpForm.addEventListener('keyup', e => {
    e.preventDefault();

    for(let i=0; i < inputs.length; i++){
        if(inputs[i].value !== "" && i !== 2){
            errorImages[i].style.display = "none";
            validationText[i].style.display = "none";
            validInvalidArray[i] = true;
        }
    }
});

/*
Email validation with the Regular Expresion
*/
emailInput.addEventListener('keyup', e => {
    e.preventDefault();

    if(!paramEmail.test(emailInput.value)){
        errorImages[2].style.display = "block";
        validationText[2].style.display = "block";
        validInvalidArray[2] = false;
    } else{
        errorImages[2].style.display = "none";
        validationText[2].style.display = "none";
        validInvalidArray[2] = true;
    }
});

/*
Validation that each input element has the proper information before sending it
*/
submitButton.addEventListener('click', e => {
    e.preventDefault();

    for(let i=0; i < inputs.length; i++){
        
        if(inputs[i].value === ""){
            errorImages[i].style.display = "block";
            validationText[i].style.display = "block";
            validInvalidArray[i] = false;
            console.log("Error in the " + inputs[i].name);
        } else {
            errorImages[i].style.display = "none";
            validationText[i].style.display = "none";
            validInvalidArray[i] = true;
            console.log("Information of " + inputs[i].name + " valid!");
        }
    }

    // Resets the form after sending the information (all information must be valid)
    let result = new Set(validInvalidArray);

    if(result.size === 1 && !result.has(false)){
        signUpForm.reset();
        console.log("Information sent correctly!");
    }
});