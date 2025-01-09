// Google Login Placeholder
document.getElementById("google-login").addEventListener("click", function () {
  alert("Google Login Placeholder - Integrate Firebase for actual login.");
  document.getElementById("login-panel").classList.add("hidden");
  document.getElementById("form-panel").classList.remove("hidden");
});

// Form Submission
document.getElementById("query-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;
  const subject = document.getElementById("subject").value;
  const question = document.getElementById("question").value;

  // Sending email via SMTP.js
  Email.send({
    SecureToken: "YOUR_SECURE_TOKEN", // Replace this with your SMTP token
    To: "your-email@example.com",
    From: "student-query@example.com",
    Subject: "New Query from Student",
    Body: `
      <h3>Student Query Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>College:</strong> ${college}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Question:</strong> ${question}</p>
    `,
  }).then((message) => alert("Your query has been submitted successfully!"));
});
