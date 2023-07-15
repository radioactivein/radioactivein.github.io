<?php

$name= $_POST['name'];
$name= $_POST['email'];
$name= $_POST['phone'];
// $name= $_POST['subject'];
$name= $_POST['message'];

$to="dashlite.kt@gmail.com";
$subject = "Mail from fans";
$txt="Name=".$name."\r\n phone =".$phone."\r\n message =".$message;
$headers = "From:".$email."\r\n" .
"CC: dashlite.kt@gmail.com";
if($email!=NULL){
    mail($to,$subject,$text,$headers);
}

//redirect

header("Location:../index.html");
?>