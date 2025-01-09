// Import Firebase modules
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Initialize Firebase (this will use your firebaseConfig)
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Google login function
document.getElementById("google-login").addEventListener("click", function () {
  const provider = new GoogleAuthProvider();
  
  // Sign in with Google
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User logged in: ", user.displayName);

      // Hide login panel and show the form panel
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
