<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 

$estandar=mysqli_query($link,"SELECT id,nomeCat,codiceTariffa,prezzo FROM categoria_contabile") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{
    if ($outp != "") {$outp .= ",";}    
    $outp .= '{"id":"'.$row[0]. '",';   
    $outp .= '"name":"'.$row[1]. '",';   
    $outp .= '"tariffa":"'.$row[2]. '",';   
    $outp .= '"prezzo":"'.$row[3]. '"}';   
}
$outp ='{"records":['.$outp.']}';
echo($outp);

?>

