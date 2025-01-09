// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace "YOUR_USER_ID" with your actual EmailJS User ID

// Google Login Placeholder
document.getElementById("google-login").addEventListener("click", function () {
  alert("Google Login Placeholder - Integrate Firebase for actual login.");
  // Hide login panel and show form panel after login
  document.getElementById("login-panel").classList.add("hidden");
  document.getElementById("form-panel").classList.remove("hidden");
});

// Form Submission Handler
document.getElementById("query-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Collecting form input values
  const name = document.getElementById("name").value.trim();
  const college = document.getElementById("college").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const question = document.getElementById("question").value.trim();

  // Basic validation to ensure no field is empty
  if (!name || !college || !subject || !question) {
    alert("All fields are required. Please fill out the form completely.");
    return;
  }

  // Preparing template parameters
  const templateParams = {
    name: name,
    college: college,
    subject: subject,
    question: question,
  };

  // Sending email using EmailJS
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams) // Replace with your Service ID and Template ID
    .then(function (response) {
      alert("Your query has been submitted successfully!");
      // Optionally reset the form after submission
      document.getElementById("query-form").reset();
    })
    .catch(function (error) {
      alert("Failed to send query. Please try again later.");
      console.error("Error sending email:", error);
    });
});
