<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
//conexion con la base de datos y el servidor 127.0.0.1

$nome=$request->nome;
$cognome=$request->cognome;
$qualifica=$request->qualifica;






$estandar=mysqli_query($link,"INSERT INTO operai( nome, cognome, qualifica) VALUES ('".$nome."','".$cognome."','".$qualifica."')") or die("Errore di INSERT MISURA!"); 



echo("true");

?>

