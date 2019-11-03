<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 


$estandar=mysqli_query($link," select sum(x.v_parziale) as parziale from (SELECT a.idMisura,b.codiceTariffa ,b.nomeCat, c.descrizione,round((a.percentuale*(b.prezzo/100)),2) as v_parziale FROM misura as a left JOIN categoria_contabile as b on a.catContabile=b.id LEFT JOIN lavori as c on a.desLavoro =c.idLavori where a.aprovaz=true and a.valid=true group by a.idMisura,b.codiceTariffa ,b.nomeCat, c.descrizione) as x") or die("Error al mostrar"); 



if($row=mysqli_fetch_array($estandar)) 
{
   $outp="";    
    $outp .= '{"parziale":"'.$row[0].'"}';
}
$outp ='{"records":['.$outp.']}';
echo($outp);


?>

