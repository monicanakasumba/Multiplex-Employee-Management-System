// JavaScript to handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get email and password values from form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform your login authentication here
    // For demonstration, just redirect to landing page if email and password are valid
    if (email === "example@example.com" && password === "password") {
        // Redirect to the landing page URL
        window.location.href = "landing-page.html";
    } else {
        // Display an error message or handle invalid credentials
        alert("Invalid email or password. Please try again.");
    }
});
