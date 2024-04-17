<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $text = $_POST['msg']; 

    $to = "slupiktomasz@gmail.com";
    $subject = "Wiadomość z mojej strony slupiktriathlon.pl";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $text, $headers)) {
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
