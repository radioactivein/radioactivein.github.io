<?php

$name= $_POST['name'];
$name= $_POST['email'];
$name= $_POST['phone'];
// $name= $_POST['subject'];
$name= $_POST['message'];

$to="ameenbaasim@outlook.com";
$subject = "Mail from fans";
$txt="Name=".$name."\r\n Email =". $email ."\r\n phone =".$phone."\r\n message =".$message;
$headers = "From: ameenbaasim@outlook.com"."\r\n" .
"CC: ameennbaasim@outlook.com";
if($email!=NULL){
    mail($to,$subject,$text,$headers);
}

//redirect

header("Location:../index.html");
?>