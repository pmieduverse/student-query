// Firebase Configuration (Replace with your Firebase project's credentials)
const firebaseConfig = {
  apiKey: "AIzaSyARRbgfZb5pFPvSGY_vXut_rl2Bb3KKmew",
  authDomain: "pmi-eduverse-student-query.firebaseapp.com",
  projectId: "pmi-eduverse-student-query",
  storageBucket: "pmi-eduverse-student-query.firebasestorage.app",
  messagingSenderId: "619300927023",
  appId: "1:619300927023:web:9131339a1011194e97b8da",
  measurementId: "G-PT1CCKJVQ2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Login Function
document.getElementById("google-login").addEventListener("click", function () {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  // Sign in with Google
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log("User logged in: ", user.displayName);

      // Hide login panel and show form panel
      document.getElementById("login-panel").classList.add("hidden");
      document.getElementById("form-panel").classList.remove("hidden");
    })
    .catch((error) => {
      console.error("Error during Google login: ", error.message);
      alert("Login failed. Please try again.");
    });
});

// Form Submission for Queries
document.getElementById("query-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const college = document.getElementById("college").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const question = document.getElementById("question").value.trim();

  // Validation
  if (!name || !college || !subject || !question) {
    alert("All fields are required. Please fill out the form completely.");
    return;
  }

  // Prepare template parameters for EmailJS
  const templateParams = {
    name: name,
    college: college,
    subject: subject,
    question: question,
  };

  // Send email using EmailJS
  emailjs.send("service_fzoiokn", "template_pxlt72o", templateParams)
    .then(function (response) {
      alert("Your query has been submitted successfully!");
      document.getElementById("query-form").reset(); // Reset the form
    })
    .catch(function (error) {
      alert("Failed to send query. Please try again later.");
      console.error("EmailJS Error:", error);
    });
});
