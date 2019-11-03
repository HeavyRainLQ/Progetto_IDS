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
$estandar=mysqli_query($link,"select * from user where username='".$username."' and password='".$password."';") or die("Error al mostrar"); 

if ($row=mysqli_fetch_array($estandar)) 
{

   $outp="";	
    $outp .= '{"ini":"true",';
    $outp .= '"nome":"'   .$row[1]. '",';
    $outp .= '"cognome":"'   .$row[2]. '",';
    $outp .= '"cod_fis":"'   .$row[3]. '",';
    $outp .= '"d_nasci":"'   .$row[4]. '",';
    $outp .= '"lug_nasci":"'   .$row[5]. '",';
    $outp .= '"cap":"'   .$row[6]. '",';
    $outp .= '"resid":"'   .$row[7]. '",';
    $outp .= '"user":"'   .$row[10]. '",';
    $outp .= '"user":"'   .$row[11]. '",';
    $outp .= '"email":"'.$row[12]. '"}';   

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

