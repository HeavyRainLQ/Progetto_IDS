
<?php

include 'conexion.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
//conexion con la base de datos y el servidor


$estandar=mysql_query("select * from user where user='".$_POST['user']."' and password='".$_POST['pass']."';",$link) or die("Error al mostrar"); 

if ($row=mysql_fetch_array($estandar)) 
{

   $outp="";	
    $outp .= '{"ini":"true",';
    $outp .= '"tipo":"'   .$row[4]. '",';
    $outp .= '"estado":"'.$row[5]. '"}'; 
   
$outp ='{"records":['.$outp.']}';
echo($outp);


//header('Location:http://localhost/Indomita/#/main');

	
}
else
{
          
$outp="";	
$outp .= '{"ini":"false"}';

$outp ='{"records":['.$outp.']}';
echo($outp);


}


?>

