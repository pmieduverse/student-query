// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import emailjs from "https://cdn.emailjs.com/dist/email.min.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAESgNEIyLU71lg9E_Y2ighBY471zM3i78",
    authDomain: "student-query-system.firebaseapp.com",
    projectId: "student-query-system",
    storageBucket: "student-query-system.firebasestorage.app",
    messagingSenderId: "105314912055",
    appId: "1:105314912055:web:8f3fb6849f96839b12fcb2",
    measurementId: "G-397W5B96NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize EmailJS
emailjs.init("eT5ap2denjFuWGh33");

// Google Login
document.getElementById("googleLogin").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert(`Welcome, ${user.displayName}!`);
            document.getElementById("authSection").style.display = "none";
            document.getElementById("studentForm").style.display = "block";
        })
        .catch((error) => {
            alert("Login failed: " + error.message);
        });
});

// Form Submission
document.getElementById("studentForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        college: document.getElementById("college").value,
        subject: document.getElementById("subject").value,
        question: document.getElementById("question").value,
    };

    emailjs.send("service_2hqm62d", "template_mcwzcun", formData)
        .then(() => {
            alert("Your query has been submitted!");
        })
        .catch((error) => {
            alert("Error submitting your query: " + JSON.stringify(error));
        });
});
