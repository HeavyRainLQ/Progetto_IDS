<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 


$totale_progetto=$request->budget;


$estandar=mysqli_query($link," SELECT a.cod_sal,a.data,b.codiceTariffa ,b.nomeCat, c.descrizione, round(a.percentuale,2) as percentuale,b.prezzo,round(a.prezzo_per,2) as prezzo_per,round(a.debito,2) as debito, round(a.debito_per,2) as debito_per, round((a.percentuale*(b.prezzo/100)),2) as v_parziale FROM sal as a
left JOIN
categoria_contabile as b
on a.cat_contabile=b.id
LEFT JOIN
lavori as c
on a.des_lavoro=c.idLavori
group by a.cod_sal,a.data,b.codiceTariffa ,b.nomeCat, c.descrizione") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{
   if ($outp != "") {$outp .= ",";}    
    
    $outp .= '{"cod_sal":"'   .$row[0]. '",';
    $outp .= '"data":"'   .$row[1]. '",';
    $outp .= '"tariffa":"'   .$row[2]. '",';
    $outp .= '"categoria":"'   .$row[3]. '",';
    $outp .= '"descrizione":"'   .$row[4]. '",';
    $outp .= '"percentuale":"'   .$row[5]. '",';
    $outp .= '"prezzo":"'   .$row[6]. '",';
    $outp .= '"prezzo_perc":"'   .$row[7]. '",';
    $outp .= '"debito":"'   .$row[8]. '",';
    $outp .= '"debito_perc":"'.$row[9]. '",';   
    $outp .= '"v_parziale":"'.$row[10]. '"}';   
}
$outp ='{"records":['.$outp.']}';
echo($outp);


?>

