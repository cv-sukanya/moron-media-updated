<?php
// Allow CORS if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Check if it's a POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get raw POST data
    $data = json_decode(file_get_contents("php://input"), true);

    // Sanitize and extract values
    $name = htmlspecialchars(strip_tags(trim($data['name'] ?? '')));
    $email = htmlspecialchars(strip_tags(trim($data['email'] ?? '')));
    $contact = htmlspecialchars(strip_tags(trim($data['contact'] ?? '')));
    $service = htmlspecialchars(strip_tags(trim($data['service'] ?? '')));
    $message = htmlspecialchars(strip_tags(trim($data['message'] ?? '')));

    // Check for missing fields
    if (!$name || !$email || !$contact || !$service || !$message) {
        http_response_code(400);
        echo json_encode(["status" => "All fields are required."]);
        exit;
    }

    // Set recipient
    $to = "sukanya@chronicleventures.com"; // 🔁 Replace with your email address
    $subject = "New Quote Request from $name";

    // Email body
    $body = "You have received a new quote request:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Contact: $contact\n" .
            "Service: $service\n\n" .
            "Message:\n$message";

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "Message sent successfully!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "Failed to send message."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "Method Not Allowed"]);
}
