<?php
//conexion con la base de datos y el servidor
include 'conexion.php';

//obtenemos los valores del formulario
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

// $id_user=$request->id_user;
$nome = $request->nome;
$cognome = $request->cognome;
$cod_fis = $request->cod_fis;
$d_nasci = $request->d_nasci;
$l_nasci = $request->l_nasci;
$cap = $request->cap;
$resid = $request->resid;
$user2 = $request->user2;
$pass2 = $request->pass2;
$tipo_user = $request->tipo_user;


$options = [
    'cost' => 10
];

$hash = password_hash($pass2, PASSWORD_BCRYPT, $options);
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
$estandar = mysqli_query($link, "INSERT INTO user( nome, cognome, cod_fiscale, d_nascita, luogo_nascita, cap, residenza, tipo_user, username, password) VALUES ('" . $nome . "','" . $cognome . "','" . $cod_fis . "','" . $d_nasci . "','" . $l_nasci . "','" . $cap . "','" . $resid . "'," . $tipo_user . ",'" . $user2 . "','" . $hash . "')") or die("Errore di INSERT USER!");

echo ("true");
