<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 


$totale_progetto=$request->budget;


$estandar=mysqli_query($link," SELECT a.id_sal,a.cod_sal,a.data,b.codiceTariffa ,b.nomeCat, c.descrizione, a.percentuale,a.prezzo_per,a.debito, a.debito_per FROM sal as a
left JOIN
categoria_contabile as b
on a.cat_contabile=b.id
LEFT JOIN
lavori as c
on a.des_lavoro=c.idLavori") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{

   if ($outp != "") {$outp .= ",";}    
    $outp .= '{"id_sal":"'.$row[0].'",';
    $outp .= '"cod_sal":"'   .$row[1]. '",';
    $outp .= '"data":"'   .$row[2]. '",';
    $outp .= '"tariffa":"'   .$row[3]. '",';
    $outp .= '"categoria":"'   .$row[4]. '",';
    $outp .= '"descrizione":"'   .$row[5]. '",';
    $outp .= '"percentuale":"'   .$row[6]. '",';
    $outp .= '"prezzo_perc":"'   .$row[7]. '",';
    $outp .= '"debito":"'   .$row[8]. '",';
    $outp .= '"debito_perc":"'.$row[9]. '"}';   
}
$outp ='{"records":['.$outp.']}';
echo($outp);


?>

