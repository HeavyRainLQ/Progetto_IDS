<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 




$estandar=mysqli_query($link,"UPDATE misura SET approva_sal=true 
WHERE aprovaz=true and valid=true") or die("Error al mostrar"); 

// if($row=mysqli_fetch_array($estandar)) 
// {
    
    $outp="";	
    $outp .= '{"Update_approva_sal":"true"}';   
    $outp ='{"records":['.$outp.']}';
	echo($outp);
// }





?>

