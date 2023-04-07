<?php

$from = $_POST["mail"];
$message = $_POST["msg"];
$subject = "Wiadomość ze strony Tomasz Słupik";
$to = "slupiktomasz@gmail.com";


$txt = "Email: " . $from . "\r\n" . "\r\n" . "Treść: "  . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /index.html?mail_status=sent");
}
else {
    header("Location: /index.html?mail_status=error");
}