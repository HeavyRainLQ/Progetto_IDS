<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
//conexion con la base de datos y el servidor 127.0.0.1
$cod_tariffa=$request->tariffa;
$cat_conta=$request->conta;
$des_lavoro=$request->lavoro;
$percentuale=$request->perce;
$riserva=$request->ris;





$estandar=mysqli_query($link,"INSERT INTO misura( codTariffa, catContabile, desLavoro, percentuale, riserva, aprovaz, valid) VALUES ('".$cod_tariffa."',".$cat_conta.",".$des_lavoro.",".$percentuale.",'".$riserva."',false,true)") or die("Errore di INSERT MISURA!"); 



echo("true");

?>

