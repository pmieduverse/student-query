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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// EmailJS Initialization
emailjs.init("eT5ap2denjFuWGh33");

// Google Login Functionality
document.getElementById("googleLogin").addEventListener("click", function () {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider)
        .then((result) => {
            document.getElementById("googleLogin").style.display = "none";
            document.getElementById("studentForm").style.display = "block";
            console.log("User logged in:", result.user);
        })
        .catch((error) => {
            console.error("Error during login:", error);
        });
});

// Form Submission
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const college = document.getElementById("college").value;
    const subject = document.getElementById("subject").value;
    const question = document.getElementById("question").value;

    const formData = {
        name: name,
        college: college,
        subject: subject,
        question: question
    };

    // Send form data via EmailJS
    emailjs.send("service_2hqm62d", "template_mcwzcun", formData)
        .then(() => {
            alert("Your query has been submitted!");
        })
        .catch((error) => {
            alert("Error: " + JSON.stringify(error));
        });
});
