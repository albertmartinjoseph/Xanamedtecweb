<?php
/**
 * Xana Medtec Ltd — Production Contact & Clinical Enquiry Handler
 * Compatible with TechBrein Linux Shared Hosting (cPanel / Apache / PHP 8.x)
 */

declare(strict_types=1);

// Set strict CORS & JSON response headers
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method Not Allowed'
    ]);
    exit;
}

// Read and decode JSON input payload
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

// Fallback to standard $_POST if not sent as raw JSON
if (!is_array($data)) {
    $data = $_POST;
}

// 1. Anti-Spam Honeypot Check (silent success to fool automated bots)
$honeypot = trim((string)($data['_honey_url'] ?? ''));
if (!empty($honeypot)) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your enquiry. Our clinical team has received your message.'
    ]);
    exit;
}

// 2. Validate Full Name (2 to 100 chars)
$name = trim((string)($data['name'] ?? ''));
$name = str_replace(["\r", "\n", "\0"], '', $name);
if (mb_strlen($name) < 2 || mb_strlen($name) > 100) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Please provide a valid full name (2–100 characters).'
    ]);
    exit;
}

// 3. Validate Email Address (RFC format, max 150 chars)
$email = trim((string)($data['email'] ?? ''));
$email = str_replace(["\r", "\n", "\0"], '', $email);
if (mb_strlen($email) > 150 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Please provide a valid email address.'
    ]);
    exit;
}

// 4. Validate Message (5 to 5,000 chars)
$message = trim((string)($data['message'] ?? ''));
$message = str_replace("\0", '', $message);
if (mb_strlen($message) < 5 || mb_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Please provide a message between 5 and 5,000 characters.'
    ]);
    exit;
}

// 5. Validate Privacy Consent
$consent = $data['consent'] ?? false;
if ($consent !== true && $consent !== 'true' && $consent !== '1' && $consent !== 1) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Privacy consent agreement is required to process your enquiry.'
    ]);
    exit;
}

// 6. Sanitize Optional Fields
$phone = trim((string)($data['phone'] ?? ''));
$phone = mb_substr(str_replace(["\r", "\n", "\0"], '', $phone), 0, 50);

$company = trim((string)($data['company'] ?? ''));
$company = mb_substr(str_replace(["\r", "\n", "\0"], '', $company), 0, 100);

$category = trim((string)($data['enquiryType'] ?? 'General'));
$category = mb_substr(str_replace(["\r", "\n", "\0"], '', $category), 0, 50);

// 7. Escape all user-supplied values inserted into HTML email body
$escName     = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$escEmail    = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$escPhone    = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$escCompany  = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$escCategory = htmlspecialchars($category, ENT_QUOTES, 'UTF-8');

// Preserve message line breaks safely
$escMessage  = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

// 8. Compose Email Delivery
$recipient = 'info@xanamedtec.com';
$cleanSubjectCategory = preg_replace('/[\r\n]+/', ' ', $category);
$cleanSubjectName     = preg_replace('/[\r\n]+/', ' ', $name);
$subject = "Xana Medtec Enquiry: [{$cleanSubjectCategory}] - {$cleanSubjectName}";
$timestamp = gmdate('Y-m-d H:i:s') . ' UTC';

// HTML Email Body with safely escaped variables
$htmlBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Website Enquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <div style="background-color: #002D62; padding: 24px 32px; border-bottom: 4px solid #20B2AA;">
      <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">Xana Medtec Ltd — New Website Enquiry</h2>
      <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">Received via xanamedtec.com on {$timestamp}</p>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b; width: 140px;">Enquiry Purpose:</td>
          <td style="padding: 10px 0; color: #002D62; font-weight: 700;">{$escCategory}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Full Name:</td>
          <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">{$escName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Email Address:</td>
          <td style="padding: 10px 0;"><a href="mailto:{$escEmail}" style="color: #20B2AA; text-decoration: none; font-weight: 600;">{$escEmail}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Phone Number:</td>
          <td style="padding: 10px 0; color: #0f172a;">{$escPhone}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Organization / Clinic:</td>
          <td style="padding: 10px 0; color: #0f172a;">{$escCompany}</td>
        </tr>
      </table>
      
      <div style="margin-top: 16px;">
        <h4 style="color: #002D62; font-size: 14px; font-weight: 700; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message / Requirements:</h4>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155;">{$escMessage}</div>
      </div>
      
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8;">
        User agreed to Xana Medtec Privacy Policy. Direct replies to this notification will route directly to <strong>{$escEmail}</strong>.
      </div>
    </div>
  </div>
</body>
</html>
HTML;

// Clean headers for reliable deliverability on cPanel
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Xana Medtec Web <no-reply@xanamedtec.com>',
    'Reply-To: ' . preg_replace('/[\r\n]+/', '', $name) . ' <' . preg_replace('/[\r\n]+/', '', $email) . '>',
    'X-Mailer: PHP/' . phpversion(),
    'X-Originating-IP: ' . ($_SERVER['REMOTE_ADDR'] ?? '127.0.0.1')
];

// Execute mail dispatch
$mailSent = @mail($recipient, $subject, $htmlBody, implode("\r\n", $headers));

// Log submission status safely without leaking credentials or private content
error_log("[Xana Medtec Enquiry] Category: {$category} | Status: " . ($mailSent ? 'SENT' : 'FAILED'));

// Check result of mail() - fail securely if sending fails
if (!$mailSent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Unable to send your enquiry due to a mail delivery issue. Please contact info@xanamedtec.com directly.'
    ]);
    exit;
}

// Return structured success response
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Thank you for your enquiry. Our clinical team has received your message.'
]);
exit;
