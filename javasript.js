function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".message");

    messageElement.textContent = message;
    messageElement.classList.remove("message--success", "message--error");
    messageElement.classList.add(`message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("input--error");
    inputElement.parentElement.querySelector(".input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("input--error");
    inputElement.parentElement.querySelector(".input-error-message").textContent = "Error input";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

       

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Username must be at least 6 characters in length");
            }
        });
   

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    let createAccount = document.getElementById('createAccount')
    createAccount.addEventListener('submit', fuction(e){

        e.preventDefault()

            let Username = document.getElementById('name')
    })
    
});
