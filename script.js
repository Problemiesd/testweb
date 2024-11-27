// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (Replace this with server-side validation for real apps)
    if (username === "admin" && password === "1234") {
        // Redirect to the welcome page on successful login
        window.location.href = "welcome.html";
    } else {
        // Show an error message
        document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
});
