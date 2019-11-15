<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 


//$descrizione=$request->prueba;


$estandar=mysqli_query($link,"SELECT nome_attr FROM attrezzatura") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{
    if ($outp != "") {$outp .= ",";}    
    $outp .= '{"nome_attr":"'.$row[0]. '"}';   
}
$outp ='{"records":['.$outp.']}';
echo($outp);




?>

