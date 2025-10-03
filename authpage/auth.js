// Modular JS for switching forms and basic validation

document.addEventListener('DOMContentLoaded', function() {
    // If URL hash is #register, show register form by default
    if (window.location.hash === '#register') {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('register-box').style.display = 'block';
    }
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginBox.style.display = 'none';
        registerBox.style.display = 'block';
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerBox.style.display = 'none';
        loginBox.style.display = 'block';
    });

    // Basic client-side validation for Register
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value;
        const confirm = document.getElementById('register-confirm').value;
        const errorDiv = document.getElementById('register-error');
        errorDiv.textContent = '';

        if (!name || !email || !password || !confirm) {
            errorDiv.textContent = 'All fields are required.';
            return;
        }
        if (password.length < 6) {
            errorDiv.textContent = 'Password must be at least 6 characters.';
            return;
        }
        if (password !== confirm) {
            errorDiv.textContent = 'Passwords do not match.';
            return;
        }
        // Ready to connect to backend
        errorDiv.textContent = '';
        // TODO: Connect to backend API
        alert('Registration form is valid. Connect to backend.');
    });

    // Basic client-side validation for Login
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const errorDiv = document.getElementById('login-error');
        errorDiv.textContent = '';

        if (!email || !password) {
            errorDiv.textContent = 'Both fields are required.';
            return;
        }
        // Ready to connect to backend
        errorDiv.textContent = '';
        // TODO: Connect to backend API
        alert('Login form is valid. Connect to backend.');
    });
});
