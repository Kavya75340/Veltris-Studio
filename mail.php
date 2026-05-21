<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
    exit;
}

// Get JSON
$data = json_decode(file_get_contents("php://input"), true);

// Sanitize
$name = htmlspecialchars(trim($data["name"] ?? ""));
$email = filter_var($data["email"] ?? "", FILTER_VALIDATE_EMAIL);
$organization = htmlspecialchars(trim($data["organization"] ?? ""));
$subject = htmlspecialchars(trim($data["subject"] ?? ""));
$message = htmlspecialchars(trim($data["message"] ?? ""));

// Validate
if (!$name || !$email || !$message) {
    echo json_encode([
        "success" => false,
        "message" => "Missing required fields"
    ]);
    exit;
}

// Email config
// $to = "contact@veltris.in";
$email_subject = $subject ? $subject : "New Website Enquiry";

// Body
$email_body = "New Enquiry Received:\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Organization: $organization\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";

// Headers (IMPORTANT FIX)
$headers = "From: Veltris Website <no-reply@veltris.in>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode([
        "success" => true,
        "message" => "Email sent successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to send email"
    ]);
}