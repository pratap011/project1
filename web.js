document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Basic email validation
    if (!isValidEmail(emailInput.value)) {
      alert("Invalid email address. Please enter a valid email.");
      return;
    }

    // You can add further logic for handling the login process here
    // For simplicity, we'll just display a success message
    alert("Login successful!");
  });

  function isValidEmail(email) {
    // Basic email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
});
