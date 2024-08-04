<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
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
    $mail->Username   = 'schonewohnung22@gmail.com';                                   
    $mail->Password   = '';                                   
    $mail->SMTPSecure = 'TLS';                                
    $mail->Port       = 587;                                  

    $mail->setFrom('schonewohnung22@gmail.com', 'Message from website');
    $mail->addAddress('schonewohnung22@gmail.com'); 
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