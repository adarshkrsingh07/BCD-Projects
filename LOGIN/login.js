function validateForm() {
    var usernameInput = document.getElementById("username").value;
    var letters = /^[A-Za-z]+$/;
    if (!usernameInput.match(letters)) {
        alert("Username must contain only characters");
        return false;
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.getElementById("toggleIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.className = "fa fa-eye-slash";
    } else {
        passwordInput.type = "password";
        toggleIcon.className = "fa fa-eye";
    }
}
