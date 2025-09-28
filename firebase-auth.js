// firebase-auth.js

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { auth } from './firebase-config.js';

// Listen for authentication state changes and update UI accordingly
onAuthStateChanged(auth, (user) => {
    const authLinks = document.getElementById('auth-links');
    const registerPackageLink = document.getElementById('register-package-link');
    const profileLink = document.getElementById('profile-link');
    const loginLink = document.getElementById('login-link');

    if (user) {
        // User is logged in
        // Hide login/signup links and show profile/logout options if they exist
        if (authLinks) authLinks.classList.add('hidden');
        if (registerPackageLink) registerPackageLink.classList.remove('hidden');
        if (profileLink) profileLink.classList.remove('hidden');
        if (loginLink) loginLink.textContent = 'Déconnexion';
        loginLink.href = '#'; // Make it a placeholder for logout
    } else {
        // User is logged out
        if (authLinks) authLinks.classList.remove('hidden');
        if (registerPackageLink) registerPackageLink.classList.add('hidden');
        if (profileLink) profileLink.classList.add('hidden');
        if (loginLink) loginLink.textContent = 'Connexion';
        loginLink.href = 'login.html';
    }
});