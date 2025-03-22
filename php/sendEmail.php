<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                          
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                 
    $mail->Username   = 'gmail@gmail.com';                                   
    $mail->Password   = 'password';                                   
    $mail->SMTPSecure = 'TLS';                                
    $mail->Port       = 587;                                  

    $mail->setFrom('gmail@gmail.com', 'Message from website');
    $mail->addAddress('gmail@gmail.com'); 
    $body = '<p>Name: '.$_POST['name'].'</p>' . '<p>Email: '.$_POST['email'].'</p>' . '<p>Tel: '.$_POST['tel'].'</p>' . '<p>User comment: '.$_POST['message'].'</p>';

    $mail->isHTML(true);                                 
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Message';
    $mail->Body    = $body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}