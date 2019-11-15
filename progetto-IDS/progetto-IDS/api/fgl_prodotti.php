<?php

include 'fgl_conexion.php';
//$link =mysqli_connect("127.0.0.1:3307","root","080994Jota.-","ids") or die("No se encuentra el servidor ");
//$db =mysql_select_db("ids",$link) or die("Error de conexion "); 
//$conn = new mysqli("localhost", "root", "080994Jota.-", "ids");  

$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
//conexion con la base de datos y el servidor 127.0.0.1
$categoria=$request->categoria;

//$username = $_POST['user'];
//$password = $_POST['pass'];
//$estandar=mysqli_query($link,"select * from user where user='admin' and password='080994';") or die("Error al mostrar"); 

$estandar=mysqli_query($link,"select * from prodotti where categoria='".$categoria."';") or die("Error al mostrar"); 

// $estandar=mysqli_query($link,"select * from prodotti where user='".$username."' and password='".$password."';") or die("Error al mostrar"); 


$outp="";	
while($row=mysqli_fetch_array($estandar)) 
{
    if ($outp != "") {$outp .= ",";}

    $outp .= '{"ini":"true",';
    $outp .= '"codigo":"../../assets/img/product/' .$row[1]. '.jpg",';
    $outp .= '"nome":"'   .$row[2]. '",';
    $outp .= '"prezzo":"'   .$row[3]. '",';
    $outp .= '"categoria":"'.$row[4]. '"}';   

}
$outp ='{"records":['.$outp.']}';
echo($outp);


?>

