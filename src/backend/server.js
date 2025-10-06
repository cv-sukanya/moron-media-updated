const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:3000", // or your frontend origin
  methods: ["GET", "POST"],
}));

app.get("/", (req, res) => {
  res.send("Backend is running");
});



app.post("/send-email", async (req, res) => {
  const { name, email, contact, service, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP settings
      auth: {
        user: "sukanya@chronicleventures.com",
        pass: "qxex etoz wejk gzci", // App Password
      },
    });

    const mailOptions = {
      from: email,
      to: "sukanya@chronicleventures.com",
      subject: `New Inquiry - ${service}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };
    console.log("Incoming form data:", req.body); // 🔍 Debug line

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
