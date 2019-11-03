<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 





$estandar=mysqli_query($link,"SELECT * FROM qualifica") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{
    if ($outp != "") {$outp .= ",";}    
    $outp .= '{"id_qual":"'.$row[0]. '",';   
    $outp .= '"nome_qual":"'.$row[1]. '"}';   
}
$outp ='{"records":['.$outp.']}';
echo($outp);




?>

