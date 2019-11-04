<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 


//$descrizione=$request->prueba;


$estandar=mysqli_query($link,"SELECT * FROM soglia") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{
    if ($outp != "") {$outp .= ",";}    
    $outp .= '{"id":"'.$row[0]. '",';   
    $outp .= '"soglia":"'.$row[1]. '",';   
    $outp .= '"superata":"'.$row[2]. '"}';   
}
$outp ='{"records":['.$outp.']}';
echo($outp);




?>

