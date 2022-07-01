const submitButton = document.getElementById("form_submit_button");
const form = document.getElementById("form");
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("pass");


//prevent default 

form.addEventListener("submit", e => {
    e.preventDefault()
    //call the function for checking the inputs 
    checkInputs();
});

function checkInputs() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = userEmail.value;
    const pass = userPassword.value;

    //checks whether the input fields are empty 

    if (firstName === '' || firstName === null  || firstName === 'karey') {
        //seterror message function 
        //add class 

        setErrorFor(firstNameInput, 'first-name field cannot be empty' )
    }else {
        //add  //success class

        setSuccessFor(firstNameInput)
    }

    if (lastName === '' || lastName === null ) {
        //seterror message function 
        //add class 

        setErrorFor(lastNameInput, 'last-name field cannot be empty' )
    }else {
        //add  //success class

        setSuccessFor(lastNameInput)
    }

    if(email === '') {
        setErrorFor(userEmail, "please enter a valid email")
    } else if (!isEmail()){
        setErrorFor(userEmail,"looks like this is not an email")
    }else {
        setSuccessFor(userEmail)
    }

    if (pass === '' || pass == '123' || pass == pass<=6) {
        setErrorFor(userPassword, 'use a strong password ')
    }else {
        setSuccessFor(userPassword);
    }

}

//setting error message 

const setErrorFor = (element , message ) => {
    const forminputfields = element.parentElement ;
    const small = forminputfields.querySelector("small");
    forminputfields.className = 'form-input-fields error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const forminputfields = input.parentElement;
    forminputfields.className = 'form-input-fields success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}









  