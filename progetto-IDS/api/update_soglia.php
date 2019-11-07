<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 



$id_soglia=$request->id;

$estandar=mysqli_query($link,"UPDATE soglia SET superata=true WHERE id_soglia=".$id_soglia."") or die("Error al mostrar"); 



// if($row=mysqli_fetch_array($estandar)) 
// {
    
    $outp="";	
    $outp .= '{"update_soglia":"true"}';   
    $outp ='{"records":['.$outp.']}';
	echo($outp);
// }





?>

