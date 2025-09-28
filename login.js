// login.js

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { auth } from './firebaseConfig.js';

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Connexion réussie !");
        window.location.href = 'index.html';

    } catch (error) {
        alert("Erreur de connexion: " + error.message);
    }
});