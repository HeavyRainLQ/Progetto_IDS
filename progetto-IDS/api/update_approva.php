<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 



$id_misura=$request->item_id;

$estandar=mysqli_query($link,"UPDATE misura SET aprovaz=true WHERE idMisura='".$id_misura."'") or die("Error al mostrar"); 



// if($row=mysqli_fetch_array($estandar)) 
// {
    
    $outp="";	
    $outp .= '{"Update_approva":"true"}';   
    $outp ='{"records":['.$outp.']}';
	echo($outp);
// }





?>

