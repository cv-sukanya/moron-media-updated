<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  $to = "sukanya@chroicleventures.com";
  $subject = "New Deck Request from $name";
  $body = "
    <h2>New Deck Request</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Message:</strong><br>$message</p>
  ";
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8\r\n";
  $headers .= "From: no-reply@yourdomain.com\r\n";
  file_put_contents("log.txt", "To: $to\nSubject: $subject\nBody: $body\nHeaders: $headers\n", FILE_APPEND);

  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    error_log("Mail error: Could not send to $to");
    echo "failed";

  }
}
?>
