<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 

$estandar=mysqli_query($link,"SELECT * FROM lavori") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{
    if ($outp != "") {$outp .= ",";}    
    $outp .= '{"id":"'.$row[0]. '",';   
    $outp .= '"name":"'.$row[1]. '"}';   
}
$outp ='{"records":['.$outp.']}';
echo($outp);

?>
