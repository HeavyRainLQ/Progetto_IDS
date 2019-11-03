<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Content-Type: text/html; charset=ISO-8859-1');
//conexion con la base de datos y el servidor
include 'conexion.php';

//obtenemos los valores del formulario
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
$id_user = $request->id_user;
$ci=$request->ci;
$nome=$request->nome;
$cognome=$request->cognome;
$cod_fis=$request->cod_fis;
$d_nasci=$request->d_nasci;
$l_nasci=$request->l_nasci;
$cap=$request->cap;
$resid=$request->resid;
$user2=$request->user2;
$pass2=$request->pass2;


//obtiene la longitud de un String
//$req =(strlen($ci)*strlen($nombre)*strlen($apellidos)*strlen($nick)*strlen($email)*strlen($pass)*strlen($rpass)) or die("<script>alert('Los campos deben estar completados');document.location=('http://localhost/Indomita/#/inicio');</script>" );

//se confirma la contraseña
/*if ($pass != $rpass) {
	echo"<script> alert('Las contraseñas no coinciden')</script>";
}
*/

//se encripta la contraseña
//$contraseñaUsuario=md5($pass);

//ingresar a la base de datos
mysqli_query($link,"update user set nome='".$nome."',cognome='".$cognome."',cod_fiscale='".$cod_fis."',d_nascita='".$d_nasci."',luogo_nascita='".$l_nasci."',cap='".$cap."', residenza='".$resid."',user='".$user2."',password='".$pass2."' where id_user='".$id_user."'");

echo("true");
?>
