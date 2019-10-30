<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 


$categoria=$request->categoria;
$descrizione=$request->descrizione;


$estandar=mysqli_query($link,"SELECT (100-sum(a.percentuale)) as accumulato FROM misura as a WHERE a.catContabile=".$categoria." and a.desLavoro=".$descrizione." and a.valid=true") or die("Errore Accumulato php"); 

if($row=mysqli_fetch_array($estandar)) 
{
	$outp="";	    
    $outp .= '{"accumulato":"'.$row[0]. '"}';   
    $outp ='{"records":['.$outp.']}';
    echo($outp);
}
else
{
echo("false");	
}



?>

