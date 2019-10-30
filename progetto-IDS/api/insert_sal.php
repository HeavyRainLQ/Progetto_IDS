<?php

include 'conexion.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
//conexion con la base de datos y el servidor 127.0.0.1


$cod_sal=$request->cod_sal;
$categoria=$request->categoria;
$descrizione=$request->descrizione;
$percentuale=$request->percentuale;
$prezzo_perc=$request->prezzo_perc;
$debito=$request->debito;
$debito_perc=$request->debito_perc;

$estandar=mysqli_query($link,"INSERT INTO sal(cod_sal,data,cat_contabile,des_lavoro,percentuale,prezzo_per,debito, debito_per) 
	VALUES (".$cod_sal.",DATE_FORMAT(now(),'%d/%m/%Y'),".$categoria.",".$descrizione.",".$percentuale.",".$prezzo_perc.",".$debito.",".$debito_perc.")") or die("Errore di INSERT SAL!"); 
//SELECT DATE_FORMAT(now(),'%d/%m/%Y') as data FROM misura

// INSERT INTO sal(cod_sal,data,cat_contabile,des_lavoro,percentuale,prezzo_per,debito, debito_per) 
// VALUES (1,DATE_FORMAT(now(),'%d/%m/%Y'),1,1,16,10,1000,25)

echo("true");

?>

