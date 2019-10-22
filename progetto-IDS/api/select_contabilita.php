<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 


$totale_progetto=$request->budget;


$estandar=mysqli_query($link,"select 
x.codiceTariffa,x.nomeCat,x.descrizione,x.prezzo,x.totale_percentuale,round(x.prezzo *(100/".$totale_progetto."),2) as prezzo_perc,round((x.prezzo/100)*x.totale_percentuale,2) as debito, round(((x.prezzo *(100/".$totale_progetto."))*x.totale_percentuale)/100,2) as debito_perc
from
(
SELECT b.codiceTariffa,b.nomeCat,c.descrizione,b.prezzo,sum(a.percentuale) totale_percentuale 
FROM misura as a 
left join categoria_contabile as b 
on a.catContabile=b.id 
left join lavori as c on a.desLavoro=c.idLavori 
where a.aprovaz=true and a.valid=true
group by b.codiceTariffa,b.nomeCat,c.descrizione,b.prezzo
) as X ") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{

   if ($outp != "") {$outp .= ",";}    
    $outp .= '{"ini":"true",';
    $outp .= '"tariffa":"'   .$row[0]. '",';
    $outp .= '"categoria":"'   .$row[1]. '",';
    $outp .= '"descrizione":"'   .$row[2]. '",';
    $outp .= '"percentuale":"'   .$row[4]. '",';
    $outp .= '"prezzo_perc":"'   .$row[5]. '",';
    $outp .= '"debito":"'   .$row[6]. '",';
    $outp .= '"debito_perc":"'.$row[7]. '"}';   
}
$outp ='{"records":['.$outp.']}';
echo($outp);


?>

