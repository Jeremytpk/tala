import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6AQ0fPDU-RvtUu23TZlhz8qtxbrKlEUI",
  authDomain: "tala-2zyh5z.firebaseapp.com",
  projectId: "tala-2zyh5z",
  storageBucket: "tala-2zyh5z.appspot.com",
  messagingSenderId: "172867130005",
  appId: "1:172867130005:web:dc40741a2e1f1f6845819c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };