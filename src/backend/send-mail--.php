<?php
// Enable CORS (optional for development)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($data["name"]);
$email = htmlspecialchars($data["email"]);
$contact = htmlspecialchars($data["contact"]);
$service = htmlspecialchars($data["service"]);
$message = htmlspecialchars($data["message"]);

$to = "sukanya@chronicleventures.com"; // Replace with your receiving email
$subject = "New Inquiry - $service";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$body = "
  <strong>Name:</strong> $name<br>
  <strong>Email:</strong> $email<br>
  <strong>Contact:</strong> $contact<br>
  <strong>Service:</strong> $service<br>
  <strong>Message:</strong><br>$message
";

if (mail($to, $subject, $body, $headers)) {
  http_response_code(200);
  echo json_encode(["message" => "Email sent successfully"]);
} else {
  http_response_code(500);
  echo json_encode(["message" => "Failed to send email"]);
}
?>
