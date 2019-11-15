<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 


$estandar=mysqli_query($link," select max(cod_sal) as id from sal") or die("Error al mostrar"); 


if($row=mysqli_fetch_array($estandar)) 
{
   $outp="";    
    $outp .= '{"cod_sal":"'.$row[0].'"}';
}
$outp ='{"records":['.$outp.']}';
echo($outp);


?>

