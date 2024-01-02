<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require '../vendor/autoload.php';
$response = 'OK';
//$retval['r'][0]['Respuesta'] = '0';
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();
    $mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        )
    );                                      // Set mailer to use SMTP
    $mail->Host = 'tls://smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'jesusgb.personal@gmail.com';                 // SMTP username
    $mail->Password = 'kipvcmmaiktwsysw';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('jesusgb.personal@gmail.com', 'Nuevo Mensaje');
    $mail->addAddress('contacto@jesusbautista.com', 'Contacto JB');

    $Name = $_POST['name'];
    $Email = $_POST['email'];
    $Subject = $_POST['subject'];
    $Message = $_POST['message'];

    if(empty($Name))
    {
        $response = 'Error: Los datos llegaron vacios';
    }
    else{
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = strtoupper($Name)." ha enviado un mensaje";
    $mail->Body    = 'Nombre: '. $Name.'<br>'
    .'Correo: '. $Email.'<br>'
    .'Asunto: '. $Subject.'<br>'
    .'Mensaje: '. $Message;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mail->send();
    }

    //$retval['r'][0]['Respuesta'] = '1';
    //echo 'OK';
} catch (Exception $e) {
  //$retval['r'][0]['Respuesta'] = '0';
    //echo 'Message could not be sent.';
    $response = 'Mailer Error: ' . $mail->ErrorInfo;
}

echo $response;
?>
