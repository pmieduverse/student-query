// Initialize EmailJS
emailjs.init("eT5ap2denjFuWGh33"); // Your EmailJS Public Key

// Google Login Placeholder
document.getElementById("google-login").addEventListener("click", function () {
  alert("Google Login Placeholder - Integrate Firebase for actual login.");
  // Hide login panel and show form panel
  document.getElementById("login-panel").classList.add("hidden");
  document.getElementById("form-panel").classList.remove("hidden");
});

// Form Submission
document.getElementById("query-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collecting form input values
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

  // Sending email using EmailJS
  emailjs
    .send("service_fzoiokn", "template_pxlt72o", templateParams) // Replace with your Service ID and Template ID
    .then(function (response) {
      alert("Your query has been submitted successfully!");
      // Reset form
      document.getElementById("query-form").reset();
    })
    .catch(function (error) {
      alert("Failed to send query. Please try again later.");
      console.error("EmailJS Error:", error);
    });
});
