<?php

include 'conexion.php';
//$link =mysqli_connect("127.0.0.1:3307","root","080994Jota.-","ids") or die("No se encuentra el servidor ");
//$db =mysql_select_db("ids",$link) or die("Error de conexion "); 
//$conn = new mysqli("localhost", "root", "080994Jota.-", "ids");  

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//conexion con la base de datos y el servidor 127.0.0.1
$username = $request->user;
$password = $request->pass;

$query1 = "SELECT * FROM user WHERE username='$username'";
$result1 = mysqli_query($link, $query1);

if ($dbHash = mysqli_fetch_array($result1)) {
    if (password_verify($password, $dbHash['password'])) {
        $outp = "";
        $outp .= '{"ini":"true",';
        $outp .= '"nome":"'   . $dbHash[1] . '",';
        $outp .= '"cognome":"'   . $dbHash[2] . '",';
        $outp .= '"cod_fiscale":"'   . $dbHash[3] . '",';
        $outp .= '"d_nascita":"'   . $dbHash[4] . '",';
        $outp .= '"luogo_nascita":"'   . $dbHash[5] . '",';
        $outp .= '"cap":"'   . $dbHash[6] . '",';
        $outp .= '"residenza":"'   . $dbHash[7] . '",';
        $outp .= '"tipo":"'   . $dbHash[8] . '",';
        $outp .= '"estado":"'   . $dbHash[9] . '",';
        $outp .= '"email":"'   . $dbHash[12] . '",';
        $outp .= '"id_user":"' . $dbHash[13] . '"}';
        $outp = '{"records":[' . $outp . ']}';
        echo ($outp);
    } else {
        $outp = "";
        $outp .= '{"ini":"false","user":"' . $username . '","pass":"' . $password . '"}';

        $outp = '{"records":[' . $outp . ']}';
        echo ($outp);
    }
}



//$username = $_POST['user'];
//$password = $_POST['pass'];
//$estandar=mysqli_query($link,"select * from user where user='admin' and password='080994';") or die("Error al mostrar"); 
// $estandar = mysqli_query($link, "select * from user where username='" . $username . "' and password='" . $hash . "';") or die("Error al mostrar");

// if ($row = mysqli_fetch_array($estandar)) {

//     $outp = "";
//     $outp .= '{"ini":"true",';
//     $outp .= '"nome":"'   . $row[1] . '",';
//     $outp .= '"cognome":"'   . $row[2] . '",';
//     $outp .= '"cod_fiscale":"'   . $row[3] . '",';
//     $outp .= '"d_nascita":"'   . $row[4] . '",';
//     $outp .= '"luogo_nascita":"'   . $row[5] . '",';
//     $outp .= '"cap":"'   . $row[6] . '",';
//     $outp .= '"residenza":"'   . $row[7] . '",';
//     $outp .= '"tipo":"'   . $row[8] . '",';
//     $outp .= '"estado":"'   . $row[9] . '",';
//     $outp .= '"email":"'   . $row[12] . '",';
//     $outp .= '"id_user":"' . $row[13] . '"}';
//     $outp = '{"records":[' . $outp . ']}';
//     echo ($outp);
//     //header('Location:http://localhost/Indomita/#/main');
// } else {
//     $outp = "";
//     $outp .= '{"ini":"false","user":"' . $username . '","pass":"' . $password . '"}';

//     $outp = '{"records":[' . $outp . ']}';
//     echo ($outp);
// }
