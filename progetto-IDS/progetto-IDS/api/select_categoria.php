<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 

$nomeCat=$request->nomeCat;
$descrizione=$request->descrizione;


$estandar=mysqli_query($link,"SELECT id,idLavori FROM categoria_contabile, lavori where nomeCat='".$nomeCat."' and lavori.descrizione='".$descrizione."';") or die("Error al mostrar"); 

if ($row=mysqli_fetch_array($estandar)) 
{

   $outp="";	
    $outp .= '{"ini":"true",';
    $outp .= '"id_categoria":"'   .$row[0]. '",';
    $outp .= '"id_lavori":"'.$row[1]. '"}';   
$outp ='{"records":['.$outp.']}';
echo($outp);

}


?>

