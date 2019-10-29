<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 





$estandar=mysqli_query($link,"SELECT id_qualifica,nome_qual FROM qualifica") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{
    if ($outp != "") {$outp .= ",";}    
    $outp .= '{"id_qualifica":"'.$row[0]. '",';
        $outp .= '"nome_qual":"'   . $row[1] .'"}';
}
$outp ='{"records":['.$outp.']}';
echo($outp);
