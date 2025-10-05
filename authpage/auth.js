const SERVER_URL = 'https://passionate-generosity-production.up.railway.app';

document.addEventListener('DOMContentLoaded', function() {
    // Show register form if #register in URL
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
});

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    fetch(`${SERVER_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => { throw new Error(data.message || 'Login failed'); });
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("token", data.token);
        window.location.href = "index.html"; // ✅ Redirect after login
    })
    .catch(error => {
        alert(error.message);
    });
}

function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    fetch(`${SERVER_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(data => { throw new Error(data.message || 'Registration failed'); });
        }
        return response.text();
    })
    .then(() => {
        alert("Registration successful! Please log in.");
      
        document.getElementById('register-box').style.display = 'none';
        document.getElementById('login-box').style.display = 'block';
       
        window.location.hash = '#login';
    })
    .catch(error => {
        alert(error.message);
    });
}

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    register();
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    login();
});

