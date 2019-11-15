<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 

$categoria=$request->categoria;


$estandar=mysqli_query($link,"SELECT a.id,a.nomeCat,a.codiceTariffa,a.prezzo FROM categoria_contabile as a
where a.nomeCat='".$categoria."'") or die("Error al mostrar"); 


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

