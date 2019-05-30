<?php
   

   //$link =mysql_connect("localhost","root","") or die("No se encuentra el servidor ");
  //$link =mysql_connect("127.0.0.1:3307","root","080994Jota.-") or die("No se encuentra el servidor ");
  //$db =mysql_select_db("ids",$link) or die("Error de conexion ");
  echo "<script>console.log( '--!!llego a php:' );</script>";

  echo '{
    "message": "This is a secret message only for administrator",
    "success": true   
}';

  $conn = new mysqli("localhost", "root", "080994Jota.-", "ids");
  echo "<script>console.log( '--!!Debug Objects:' );</script>";
  return $conn;


?>