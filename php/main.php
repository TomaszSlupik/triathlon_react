<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $message = $_POST['msg']; // Pobranie treści wiadomości z pola "msg"

    $to = "slupiktomasz@gmail.com";
    $subject = "Nowa wiadomość";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo "E-mail został wysłany pomyślnie.";
    } else {
        http_response_code(500);
        echo "Wystąpił błąd podczas wysyłania e-maila.";
    }
} else {
    http_response_code(403);
    echo "Nieprawidłowe żądanie.";
}
