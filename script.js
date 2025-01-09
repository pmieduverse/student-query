// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAESgNEIyLU71lg9E_Y2ighBY471zM3i78",
    authDomain: "student-query-system.firebaseapp.com",
    projectId: "student-query-system",
    storageBucket: "student-query-system.appspot.com",
    messagingSenderId: "105314912055",
    appId: "1:105314912055:web:8f3fb6849f96839b12fcb2",
    measurementId: "G-397W5B96NT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// EmailJS Initialization
emailjs.init("eT5ap2denjFuWGh33");

// Google Login Functionality
document.getElementById("googleLogin").addEventListener("click", function () {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            alert(`Welcome, ${user.displayName}!`);
            // Hide login section and show the form
            document.getElementById("authSection").style.display = "none";
            document.getElementById("studentForm").style.display = "block";
        })
        .catch((error) => {
            console.error("Login Error:", error);
            alert("Error during login: " + error.message);
        });
});

// Form Submission
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value.trim();
    const college = document.getElementById("college").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const question = document.getElementById("question").value.trim();

    // Validate form fields
    if (!name || !college || !subject || !question) {
        alert("All fields are required!");
        return;
    }

    const formData = {
        name: name,
        college: college,
        subject: subject,
        question: question
    };

    // Send form data via EmailJS
    emailjs.send("service_2hqm62d", "template_mcwzcun", formData)
        .then(() => {
            alert("Your query has been submitted successfully!");
            // Reset the form after submission
            document.getElementById("studentForm").reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Error: " + JSON.stringify(error));
        });
});
