const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "AaBb1234^%$") {
        // Komunikat gdy warunki hasła zostaną spełnione
        alert("You have successfully logged in.");
        location.reload();
    } else {
        // Komunikat gdy warunki hasła nie zostaną spełnione
        alert("Wrong password.")
        loginErrorMsg.style.opacity = 1;
    }
})
