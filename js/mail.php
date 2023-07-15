<?php

// $name= $_POST['name'];
// $name= $_POST['email'];
// $name= $_POST['phone'];
// $name= $_POST['subject'];
// $name= $_POST['message'];

// $to="dashlite.kt@gmail.com";
// $subject = "Mail from fans";
// $txt="Name=".$name."\r\n phone =".$phone."\r\n message =".$message;
// $headers = "From:dashlite.kt@gmail.com".$email."\r\n" .
// "CC: dashlite.kt@gmail.com";
// if($email!=NULL){
//     mail($to,$subject,$text,$headers);
// }

// //redirect

// header("Location:../index.html");



//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
// $subject= $_POST['subject'];
$message= $_POST['message'];
$phone= $_POST['phone'];

$to = "dashlite.kt@gmail.com";
$subject = "Mail From fan";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message . "\r\n Number =" . $phone;
$headers = "From: dashlite.kt@gmail.com" . "\r\n" .
"CC: dashlite.kt@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:../index.html");

?>