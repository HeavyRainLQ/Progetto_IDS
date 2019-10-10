<?php

include 'conexion.php';
//$link =mysqli_connect("127.0.0.1:3307","root","080994Jota.-","ids") or die("No se encuentra el servidor ");
//$db =mysql_select_db("ids",$link) or die("Error de conexion "); 
//$conn = new mysqli("localhost", "root", "080994Jota.-", "ids");  

$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
//conexion con la base de datos y el servidor 127.0.0.1
$username=$request->user;
$password=$request->pass;
//$username = $_POST['user'];
//$password = $_POST['pass'];
//$estandar=mysqli_query($link,"select * from user where user='admin' and password='080994';") or die("Error al mostrar"); 
$estandar=mysqli_query($link,"select * from user where user='".$username."' and password='".$password."';") or die("Error al mostrar"); 

if ($row=mysqli_fetch_array($estandar)) 
{

   $outp="";	
    $outp .= '{"ini":"true",';
    $outp .= '"iden":"'   .$row[1]. '",';
    $outp .= '"nome":"'   .$row[2]. '",';
    $outp .= '"cognome":"'   .$row[3]. '",';
    $outp .= '"cod_fis":"'   .$row[4]. '",';
    $outp .= '"d_nasci":"'   .$row[5]. '",';
    $outp .= '"lug_nasci":"'   .$row[6]. '",';
    $outp .= '"cap":"'   .$row[7]. '",';
    $outp .= '"resid":"'   .$row[8]. '",';
    $outp .= '"user":"'   .$row[12]. '",';
    $outp .= '"pass":"'.$row[13]. '"}';   

$outp ='{"records":['.$outp.']}';
echo($outp);
//header('Location:http://localhost/Indomita/#/main');
}
else
{          
$outp="";	
$outp .= '{"ini":"false","user":"'.$username.'","pass":"'.$password.'"}';

$outp ='{"records":['.$outp.']}';
echo($outp);

}

?>

